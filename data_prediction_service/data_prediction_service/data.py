import pandas as pd
import json


class ExhausterData():
    
    def __init__(self, name: str, scheme: str) -> None:
        self.__name = name
        self.__exhauster_scheme_df = pd.read_csv(scheme)
        _columns = []
        for i in self.__exhauster_scheme_df.index:
            _column = self.__exhauster_scheme_df["measure"][i] + "_" + self.__exhauster_scheme_df["component"][i] + "_" + str(self.__exhauster_scheme_df["number"][i])
            if _column not in _columns:
                _columns.append(_column)
        self.__exhauster_df = pd.DataFrame(columns=_columns)
    
    def kafka_msg_to_row(self, msg) -> None:
        _json_msg_str = msg.value.decode('utf-8').replace("'", '"')
        _msg_value = json.loads(_json_msg_str)
        _row = {}
        for i in self.__exhauster_scheme_df.index:
            _key = self.__exhauster_scheme_df["measure"][i] + "_" + self.__exhauster_scheme_df["component"][i] + "_" + str(self.__exhauster_scheme_df["number"][i])
            _value = _msg_value[self.__exhauster_scheme_df["signal"][i]]
            _row[_key] = _value
            
        self.__exhauster_df = self.__exhauster_df.append(_row, ignore_index=True)
        
    def get_data_frame(self) -> pd.DataFrame:
        return self.__exhauster_df
        