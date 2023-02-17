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
        self.__group_id = "qst-data-service"
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
                    
        self.__consumer = KafkaConsumer(
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
        )
        
        self.__topic_partition = TopicPartition("zsmk-9433-dev-01", 0)
        self.__consumer.assign([self.__topic_partition])
        
        self.__callbacks = []
        self.stored_data = [] # fix amount of stored data
        
    def get_data_batch(self, batch_size: int) -> None:
        for _ in range(batch_size):
            msg = next(self.__consumer)
            self.stored_data.append(msg)
            
    # to fix callbacks sync
        
    # def register_callback(self, callback: Callable[[any, data.VacuumPumpData], None]) -> None:
    #     self.__callbacks.append(callback) # callback must be async
        
    # async def __delayed_timer(self, delay: int) -> None:
    #     await asyncio.sleep(delay)
        
    # async def basic_callback(future, data): # callback example
    #     await asyncio.sleep(1)
    #     future.set_result(data)
        
    # async def process(future, self) -> any:
    #     context = asyncio.get_running_loop()
    #     futures = [context.create_future() for _ in self.__callbacks]
    #     data = next(self.__consumer) # data has been already serialized
    #     assert isinstance(data, VacuumPumpData)
            
    #     if self.__mode == "full":
    #         for i, _callback in enumerate(self.__callbacks):
    #             context.create_task(
    #                 _callback(futures[i], data))
            
    #         _wait_task = context.create_task(self.__delayed_timer(5))
                
    #         self.__stored_data.append(data)
    #         _once_results = []
    #         for i, _future in enumerate(futures):
    #             _once_results.append((await _future, self.__callbacks[i].__name__))
    #         await _wait_task
    #         future.set_result(_once_results)
    #     else:
    #         pass # TODO async batch treatement