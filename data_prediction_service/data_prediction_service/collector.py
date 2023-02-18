import consumer
import data
import sys

if __name__ == "__main__":
    
    streamer = consumer.DataStreamer()
    
    u171 = data.ExhausterData("u171", "config/signals_mapping_u171.csv")

    path_to_csv = sys.argv[1]
    batch_size = int(sys.argv[2])
    interval = int(sys.argv[3])
    
    streamer.set_to_start()
    streamer.get_data_batch(batch_size, interval)
    for _data in streamer.stored_data:
        u171.kafka_msg_to_row(_data)
    
    u171.get_data_frame().to_csv(path_to_csv)