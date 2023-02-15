from kafka import KafkaConsumer
import yaml
from data import VacuumPumpData
from typing import Callable
import asyncio


class DataStreamer():
    
    params = ["topic", 
              "server", 
              "auto_offset_reset",
              "enable_auto_commit",
              "auto_commit_interval_ms",
              "group_id",
              "mode",
              "batch_size"]
    
    def __init__(self, deserializer: Callable[[any], VacuumPumpData], config: str) -> None:
        
        self.__topic = "test"
        self.__server = "localhost:9092"
        self.__auto_offset_reset = "earliest"
        self.__enable_auto_commit = True
        self.__auto_commit_interval_ms = 100
        self.__group_id = "test-group"
        self.__mode = "full"
        self.__batch_size = 10
        
        with open(config, 'r') as _stream:
            _conf = yaml.safe_load(_stream)
            for _c in self.params:
                if _c in _conf:
                    self.__setattr__("_DataStreamer__" + _c, _conf[_c])
                    
        self.__consumer = KafkaConsumer(
            self.__topic,
            bootstrap_servers=[self.__server],
            auto_offset_reset=self.__auto_offset_reset,
            enable_auto_commit=self.__enable_auto_commit,
            auto_commit_interval_ms=self.__auto_commit_interval_ms,
            group_id=self.__group_id,
            value_deserializer=deserializer
        )
        
        self.__callbacks = []
        self.__stored_data = [] # fix amount of stored data
        
    def register_callback(self, callback: Callable[[any, VacuumPumpData], None]) -> None:
        self.__callbacks.append(callback) # callback must be async
        
    async def __delayed_timer(self, delay: int) -> None:
        await asyncio.sleep(delay)
        
    async def basic_callback(future, data): # callback example
        await asyncio.sleep(1)
        future.set_result(data)
        
    async def process(future, self) -> any:
        context = asyncio.get_running_loop()
        futures = [context.create_future() for _ in self.__callbacks]
        data = next(self.__consumer) # data has been already serialized
        assert isinstance(data, VacuumPumpData)
            
        if self.__mode == "full":
            for i, _callback in enumerate(self.__callbacks):
                context.create_task(
                    _callback(futures[i], data))
            
            _wait_task = context.create_task(self.__delayed_timer(5))
                
            self.__stored_data.append(data)
            _once_results = []
            for i, _future in enumerate(futures):
                _once_results.append((await _future, self.__callbacks[i].__name__))
            await _wait_task
            future.set_result(_once_results)
        else:
            pass # TODO async batch treatement