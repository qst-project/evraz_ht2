import asyncio
import websockets
import json
import consumer
import data
import multiprocessing as mp

parent_conn, child_conn = mp.Pipe()
l = mp.Lock()
last_data_ = []

async def send_prediction(websocket, path):
    msg = await websocket.recv()
    global last_data_
    l.acquire()
    if parent_conn.poll():
        last_data_ = parent_conn.recv()
    l.release()
    _json = json.dumps(last_data_)
    await websocket.send(_json)
    
def update_failure(l, conn):
    first_res = []
    streamer = consumer.DataStreamer()
    exhauster_list = [data.ExhausterData(1, "У-171", "config/signals_mapping_u171.csv"),
                      data.ExhausterData(1, "У-172", "config/signals_mapping_u172.csv"),
                      data.ExhausterData(2, "Ф-171", "config/signals_mapping_f171.csv"),
                      data.ExhausterData(2, "Ф-172", "config/signals_mapping_f172.csv"),
                      data.ExhausterData(3, "Х-171", "config/signals_mapping_x171.csv"),
                      data.ExhausterData(3, "Х-172", "config/signals_mapping_x172.csv")]
    for exhauster in exhauster_list:
        first_res.append({
                "exhauster_name": exhauster.get_name(),
                "number": exhauster.get_number(),
                "hours_to_failure": exhauster.get_time_to_failure(),
                "precision": exhauster.get_precision(),
                "moment": exhauster.get_last_moment()
        })
    l.acquire()
    conn.send(first_res)
    l.release()
    _offset = streamer.fill_first()
    for exhauster in exhauster_list:
        for _d in streamer.stored_data:
            exhauster.kafka_msg_to_row(_d)
            
    streamer.consumer.seek(streamer.topic_partition, _offset)
    while True:
        _msg = next(streamer.consumer)
        res = []
        for exhauster in exhauster_list:
            exhauster.row_pop()
            exhauster.kafka_msg_to_row(_msg)
            exhauster.update_failure()
            res.append({
                "exhauster_name": exhauster.get_name(),
                "number": exhauster.get_number(),
                "hours_to_failure": exhauster.get_time_to_failure(),
                "precision": exhauster.get_precision(),
                "moment": exhauster.get_last_moment()
            })
            
        l.acquire()
        conn.send(res)
        l.release()
            
    conn.close()
        
if __name__ == "__main__":
    print("Running streamer")
    p = mp.Process(target=update_failure, args=(l, child_conn,))
    p.start()
    
    print("Running server")
    ws_server = websockets.serve(send_prediction, "127.0.0.1", 8765)
    
    asyncio.get_event_loop().run_until_complete(ws_server)
    asyncio.get_event_loop().run_forever()
    
    