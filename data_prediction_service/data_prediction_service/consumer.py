from kafka import KafkaConsumer, TopicPartition
import yaml
import data
from typing import Callable
import asyncio


class DataStreamer():
    
    params = ["topic", 
              "server",
              "security_protocol",
              "sasl_mechanism",
              "sasl_plain_username", 
              "sasl_plain_password",
              "ssl_cafile",
              "group_id",
              "auto_offset_reset",
              "enable_auto_commit",
              "auto_commit_interval_ms",
              "mode",
              "batch_size"]
    
    def __init__(self, config: str = None) -> None:
        
        self.__topic = "zsmk-9433-dev-01"
        self.__server = "rc1a-b5e65f36lm3an1d5.mdb.yandexcloud.net:9091"
        self.__security_protocol = "SASL_SSL"
        self.__sasl_mechanism = "SCRAM-SHA-512"
        self.__sasl_plain_username = "9433_reader"
        self.__group_id = "qst-data-service-testing"
        self.__sasl_plain_password = "eUIpgWu0PWTJaTrjhjQD3.hoyhntiK"
        self.__ssl_cafile = "/usr/local/share/ca-certificates/Yandex/YandexCA.crt"
        self.__auto_offset_reset = "earliest"
        self.__enable_auto_commit = True
        self.__auto_commit_interval_ms = 20
        
        if config is not None:
            with open(config, 'r') as _stream:
                _conf = yaml.safe_load(_stream)
                for _c in self.params:
                    if _c in _conf:
                        self.__setattr__("_DataStreamer__" + _c, _conf[_c])
                    
        self.consumer = KafkaConsumer(
            bootstrap_servers=[self.__server],
            security_protocol=self.__security_protocol,
            sasl_mechanism=self.__sasl_mechanism,
            sasl_plain_username=self.__sasl_plain_username,
            sasl_plain_password=self.__sasl_plain_password,
            ssl_cafile=self.__ssl_cafile,
            auto_offset_reset=self.__auto_offset_reset,
            enable_auto_commit=self.__enable_auto_commit,
            auto_commit_interval_ms=self.__auto_commit_interval_ms,
            group_id=self.__group_id,
            fetch_max_wait_ms=20
        )
        
        self.topic_partition = TopicPartition(self.__topic, 0)
        self.consumer.assign([self.topic_partition])
        
        self.stored_data = []
        
    def fill_first(self) -> int:
        self.set_real_time()
        msg = next(self.consumer)
        _offset = msg.offset
        self.get_data_batch(_offset - 100, 100, 1)
        return _offset
        
    def close(self):
        self.consumer.close()
        
    def set_to_start(self):
        self.consumer.seek_to_beginning()
        
    def set_real_time(self):
        self.consumer.seek_to_end()
        
    def get_data_batch(self, start: int, batch_size: int, interval: int = 1) -> None:
        self.consumer.seek(self.topic_partition, start)
        for _ in range(batch_size):
            msg = next(self.consumer)
            print("Message retieved with offset " + str(msg.offset))
            self.stored_data.append(msg)
            self.consumer.seek(self.topic_partition, msg.offset + interval)
            print("Offset changed")