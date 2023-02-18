import asyncio
import websockets
import json

'''
    Data format json: 
    {
        "<exhauster_name>(u171)" : [ 
            {
                "component" : "<component_name>(bearing_1)"
                "days_to_failure": <prediction>
                "precision": <precision>
            },
            {...},
            ...
        ],
        "...": [...],
        ...
    }
'''

async def send_prediction(websocket, path):
    msg = await websocket.recv()
    _json = json.dumps([{
            "exhauter_name": "У-171",
            "hours_to_failure": 120,
            "precision": 100,
        }, {
            "exhauter_name": "Ф-172",
            "hours_to_failure": 120,
            "precision": 100,
        }])
    await websocket.send(_json)
        
if __name__ == "__main__":
    print("Running server")
    ws_server = websockets.serve(send_prediction, "127.0.0.1", 8765)
    
    asyncio.get_event_loop().run_until_complete(ws_server)
    asyncio.get_event_loop().run_forever()