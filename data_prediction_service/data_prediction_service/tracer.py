import pandas as pd
import sys
import matplotlib.pyplot as plt

if __name__ == "__main__":
    path_to_csv = sys.argv[1]
    param = sys.argv[2]
    
    df = pd.read_csv(path_to_csv)
    plt.figure()
    
    alive = []
    param_data = []
    timestamp = []
    
    for i in df.index:
        timestamp.append(df["moment"][i])
        alive.append(df["work_is_working_0"][i])
        param_data.append(df[param][i])
        
    fig, (ax1, ax2) = plt.subplots(2, 1, sharex=True, sharey="row")
    ax1.plot(timestamp, param_data)
    ax1.set_title(param)
    
    ax2.plot(timestamp, alive)
    ax2.set_title("alive")
    
    plt.show()    