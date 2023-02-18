import pandas as pd
import sys
import matplotlib.pyplot as plt
import numpy as np
import math

if __name__ == "__main__":
    path_to_csv = sys.argv[1]
    mode = sys.argv[2]
    
    df = pd.read_csv(path_to_csv)
    plt.figure()
    
    _y = ["vibration_axial_bearing_8", "vibration_vertical_bearing_8", "vibration_horizontal_bearing_8"]
    
    if mode == "normal":
        
        df.plot(x="moment", y=_y, subplots=True, figsize=(len(_y), 6))
        plt.legend(loc="best")
        
    else:
        alive = df["work_is_working_0"].to_numpy()
        x_data = df["vibration_horizontal_bearing_8"].to_numpy()
        y_data = df["vibration_vertical_bearing_8"].to_numpy()
        s_data = df["vibration_axial_bearing_8"].to_numpy()
        timestamp = df["moment"].to_numpy()
        
        if mode == "fft":
            fig, (ax1, ax2, ax3) = plt.subplots(3, 1)
            
            fft_x_data = np.fft.fft(x_data)
            fft_y_data = np.fft.fft(y_data)
            fft_s_data = np.fft.fft(s_data)
            freq = np.fft.fftfreq(timestamp.shape[-1])
            
            ax1.plot(freq, np.absolute(fft_x_data))
            ax1.set_title("fft_horizontal")
            
            ax2.plot(freq, np.absolute(fft_y_data))
            ax2.set_title("fft_vertical")
            
            ax3.plot(freq, np.absolute(fft_s_data))
            ax3.set_title("fft_axial")
            
        else:
            print("Not implemented")
        
    plt.show()