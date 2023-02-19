import pandas as pd
import json
from datetime import datetime
from scipy import signal
import numpy as np


def stft_distance(df_orig: pd.DataFrame, df_new: pd.DataFrame) -> float:
    fs = 1.0 / 60.0
    
    x_data_orig_7 = df_orig["vibration_horizontal_bearing_7"].to_numpy()
    y_data_orig_7 = df_orig["vibration_vertical_bearing_7"].to_numpy()
    s_data_orig_7 = df_orig["vibration_axial_bearing_7"].to_numpy()
    
    x_data_new_7 = df_new["vibration_horizontal_bearing_7"].to_numpy()
    y_data_new_7 = df_new["vibration_vertical_bearing_7"].to_numpy()
    s_data_new_7 = df_new["vibration_axial_bearing_7"].to_numpy()
    
    _, _, stft_x_data_orig_7 = signal.stft(x_data_orig_7, fs, nperseg=5)
    _, _, stft_x_data_new_7 = signal.stft(x_data_new_7, fs, nperseg=5)
    
    _, _, stft_y_data_orig_7 = signal.stft(y_data_orig_7, fs, nperseg=5)
    _, _, stft_y_data_new_7 = signal.stft(y_data_new_7, fs, nperseg=5)
    
    _, _, stft_s_data_orig_7 = signal.stft(s_data_orig_7, fs, nperseg=5)
    _, _, stft_s_data_new_7 = signal.stft(s_data_new_7, fs, nperseg=5)
    
    d = 0
    for i in range(len(stft_x_data_orig_7)):
        for j in range(len(stft_x_data_orig_7[i])):
            d += abs(stft_x_data_orig_7[i][j] - stft_x_data_new_7[i][j])
            
    for i in range(len(stft_y_data_orig_7)):
        for j in range(len(stft_y_data_orig_7[i])):
            d += abs(stft_y_data_orig_7[i][j] - stft_y_data_new_7[i][j])
            
    for i in range(len(stft_s_data_orig_7)):
        for j in range(len(stft_s_data_orig_7[i])):
            d += abs(stft_s_data_orig_7[i][j] - stft_s_data_new_7[i][j])
            
    x_data_orig_8 = df_orig["vibration_horizontal_bearing_8"].to_numpy()
    y_data_orig_8 = df_orig["vibration_vertical_bearing_8"].to_numpy()
    s_data_orig_8 = df_orig["vibration_axial_bearing_8"].to_numpy()
    
    x_data_new_8 = df_new["vibration_horizontal_bearing_8"].to_numpy()
    y_data_new_8 = df_new["vibration_vertical_bearing_8"].to_numpy()
    s_data_new_8 = df_new["vibration_axial_bearing_8"].to_numpy()
    
    _, _, stft_x_data_orig_8 = signal.stft(x_data_orig_8, fs, nperseg=5)
    _, _, stft_x_data_new_8 = signal.stft(x_data_new_8, fs, nperseg=5)
    
    _, _, stft_y_data_orig_8 = signal.stft(y_data_orig_8, fs, nperseg=5)
    _, _, stft_y_data_new_8 = signal.stft(y_data_new_8, fs, nperseg=5)
    
    _, _, stft_s_data_orig_8 = signal.stft(s_data_orig_8, fs, nperseg=5)
    _, _, stft_s_data_new_8 = signal.stft(s_data_new_8, fs, nperseg=5)
    
    for i in range(len(stft_x_data_orig_8)):
        for j in range(len(stft_x_data_orig_8[i])):
            d += abs(stft_x_data_orig_8[i][j] - stft_x_data_new_8[i][j])
            
    for i in range(len(stft_y_data_orig_8)):
        for j in range(len(stft_y_data_orig_8[i])):
            d += abs(stft_y_data_orig_8[i][j] - stft_y_data_new_8[i][j])
            
    for i in range(len(stft_s_data_orig_8)):
        for j in range(len(stft_s_data_orig_8[i])):
            d += abs(stft_s_data_orig_8[i][j] - stft_s_data_new_8[i][j])
    
    return d


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
        self.__last_df = None
        self.__exhauster_df = pd.DataFrame(columns=_columns)
        self.__time_base = None
        self.__hours_penality = 0.05
        self.__threshold = 5.5
        self.__to_failure = 720.0
        self.__precision = 100
        self.__last_moment = "NaN"
        
    def reset(self):
        self.__exhauster_df.iloc[0:0]
        self.__time_base = None
        
    def row_pop(self) -> None:
        self.__last_df = self.__exhauster_df.copy()
        self.__exhauster_df = self.__exhauster_df.drop([0])
    
    def kafka_msg_to_row(self, msg, scale: float = 1.0) -> None:
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
            self.__last_moment = _moment
            
            _row[_key] = _value
            if self.__time_base is None:
                self.__time_base = datetime.strptime(_moment.split('.')[0],'%Y-%m-%dT%H:%M:%S')            
                _row["moment"] = 0.0
            else:
                dt_moment_ = datetime.strptime(_moment.split('.')[0],'%Y-%m-%dT%H:%M:%S')
                t_ = dt_moment_ - self.__time_base
                _row["moment"] = t_.total_seconds() / scale
            
        self.__exhauster_df = self.__exhauster_df.append(_row, ignore_index=True)
        
    def update_failure(self) -> None:
        d = stft_distance(self.__exhauster_df, self.__last_df)
        self.__to_failure -= (1 / 60)
        self.__to_failure -= self.__hours_penality * d
        if d > self.__threshold:
            self.__precision -= 5
        else:
            self.__precision += 2
        
    def get_data_frame(self) -> pd.DataFrame:
        return self.__exhauster_df
    
    def get_time_to_failure(self) -> float:
        return self.__to_failure
    
    def get_precision(self) -> float:
        return self.__precision
    
    def get_name(self) -> str:
        return self.__name
    
    def get_last_moment(self):
        return self.__last_moment