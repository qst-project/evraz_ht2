import pandas as pd
import sys
import matplotlib.pyplot as plt
import numpy as np
from scipy import signal
import data
import math

if __name__ == "__main__":
    path_to_csv = sys.argv[1]
    mode = sys.argv[2]
    
    df = pd.read_csv(path_to_csv)
    plt.figure()
    
    df_orig = pd.read_csv("./config/u171_data_fft.csv")
    df_new = pd.read_csv("./config/u171_data_fft3.csv")
    
    data.stft_distance(df_orig, df_new)    
    
    _y = ["vibration_axial_bearing_7", "vibration_vertical_bearing_7", "vibration_horizontal_bearing_7"]
    
    if mode == "normal":
        
        df.plot(x="moment", y=_y, subplots=True, figsize=(len(_y), 6))
        plt.legend(loc="best")
        
    else:
        alive = df["work_is_working_0"].to_numpy()
        x_data = df["vibration_horizontal_bearing_7"].to_numpy()
        y_data = df["vibration_vertical_bearing_7"].to_numpy()
        s_data = df["vibration_axial_bearing_7"].to_numpy()
        timestamp = df["moment"].to_numpy()
        N = len(timestamp) // 2
        
        if mode == "fft":
            fig, (ax1, ax2, ax3) = plt.subplots(3, 1)
            
            fft_x_data = np.fft.fft(x_data)
            fft_y_data = np.fft.fft(y_data)
            fft_s_data = np.fft.fft(s_data)
            freq = np.linspace(0.0, 1.0 / (2.0 * 60.0), N)
            
            ax1.stem(freq, np.absolute(fft_x_data[N:]), markerfmt=' ')
            ax1.set_title("fft_horizontal")
            
            ax2.stem(freq, np.absolute(fft_y_data[N:]), markerfmt=' ')
            ax2.set_title("fft_vertical")
            
            ax3.stem(freq, np.absolute(fft_s_data[N:]), markerfmt=' ')
            ax3.set_title("fft_axial")
            
        elif mode == "stft":
            fs = 1.0 / 60.0
            f, t, stft_x_data = signal.stft(x_data, fs, nperseg=5)
            _max = np.max(np.abs(stft_x_data))
            plt.pcolormesh(t, f, np.abs(stft_x_data), vmin=0, vmax=_max, shading='gouraud')
            plt.title('STFT Magnitude')

            plt.ylabel('Frequency [Hz]')

            plt.xlabel('Time [sec]')

            plt.show()
            
        else:
            print("Not implemented")
        
    plt.show()