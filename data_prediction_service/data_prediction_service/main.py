import consumer
import data

if __name__ == "__main__":
    streamer = consumer.DataStreamer()
    # consumer  = KafkaConsumer(bootstrap_servers=["rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091"],
    #                           security_protocol="SASL_SSL",
    #                           sasl_mechanism="SCRAM-SHA-512",
    #                           sasl_plain_username="9433_reader",
    #                           auto_offset_reset = "earliest",
    #                           group_id="qst-data-service",
    #                           sasl_plain_password="eUIpgWu0PWTJaTrjhjQD3.hoyhntiK",
    #                           ssl_cafile="/usr/local/share/ca-certificates/Yandex/YandexCA.crt")
    
    # print("ready")
    
    # partition = TopicPartition("zsmk-9433-dev-01", 0)
    # consumer.assign([partition])
    
    # consumer.seek_to_beginning()
    
    # for msg in consumer:
    #     print(msg.value.decode("utf-8"))
    u171 = data.ExhausterData("u171", "config/signals_mapping_u171.csv")
    
    streamer.get_data_batch(1)
    u171.kafka_msg_to_row(streamer.stored_data[0])
    print(u171.get_data_frame())