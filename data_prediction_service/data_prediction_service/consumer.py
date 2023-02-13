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
        
    def start(self) -> any:
        if self.__mode == "full":
            pass # TODO: script for analysis
        else:
            pass # TODO async batch treatement
        
    
        

