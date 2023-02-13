from dataclasses import dataclass
from typing import List
import pandas as pd


@dataclass(init=True, repr=True, eq=True, order=False)
class VacuumPumpData():
    x: int = 0
    
    
def to_pandas_data_frame(raw_data: List[VacuumPumpData]) -> pd.DataFrame:
    return pd.DataFrame(raw_data)