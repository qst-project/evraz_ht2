import pandas as pd
import json
from datetime import datetime


class ExhausterData():
    
    def __init__(self, name: str, scheme: str) -> None:
        self.__name = name
        self.__exhauster_scheme_df = pd.read_csv(scheme)
        _columns = ["moment"]
        for i in self.__exhauster_scheme_df.index:
            if "alarm" in self.__exhauster_scheme_df["measure"][i] or "warning" in self.__exhauster_scheme_df["measure"][i]:
                continue
            _column = self.__exhauster_scheme_df["measure"][i] + "_" + self.__exhauster_scheme_df["component"][i] + "_" + str(self.__exhauster_scheme_df["number"][i])
            if _column not in _columns:
                _columns.append(_column)
        self.__exhauster_df = pd.DataFrame(columns=_columns)
        self.__time_base = None
        
    def reset(self):
        self.__exhauster_df.iloc[0:0]
        self.__time_base = None
    
    def kafka_msg_to_row(self, msg, scale: float = 3600) -> None:
        _json_msg_str = msg.value.decode('utf-8').replace("'", '"')
        _msg_value = json.loads(_json_msg_str)
        _row = {}
        for i in self.__exhauster_scheme_df.index:
            if "alarm" in self.__exhauster_scheme_df["measure"][i] or "warning" in self.__exhauster_scheme_df["measure"][i]:
                continue
            _key = self.__exhauster_scheme_df["measure"][i] + "_" + self.__exhauster_scheme_df["component"][i] + "_" + str(self.__exhauster_scheme_df["number"][i])
            _value = -1.0
            if self.__exhauster_scheme_df["signal"][i] in _msg_value:
                _value = _msg_value[self.__exhauster_scheme_df["signal"][i]]
            
            _moment = _msg_value["moment"]
            
            _row[_key] = _value
            if self.__time_base is None:
                self.__time_base = datetime.strptime(_moment.split('.')[0],'%Y-%m-%dT%H:%M:%S')            
                _row["moment"] = 0.0
            else:
                dt_moment_ = datetime.strptime(_moment.split('.')[0],'%Y-%m-%dT%H:%M:%S')
                t_ = dt_moment_ - self.__time_base
                _row["moment"] = t_.total_seconds() / scale
            
        self.__exhauster_df = self.__exhauster_df.append(_row, ignore_index=True)
        
    def get_data_frame(self) -> pd.DataFrame:
        return self.__exhauster_df
        