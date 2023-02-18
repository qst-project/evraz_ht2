import re
from collections import defaultdict

import pandas as pd


def or_(f, other=''):
    try:
        return f()
    except Exception as e:
        return other


columns = [
    'sinmachine_number',
    'exhauster_number',
    'exhauster_name',
    'bearing_number',
    'measure',  # ['bearing_temperature', 'bearing_temperature_alarm_max', ...
    # 'cooler_oil', 'cooler_water', 'gas_collector', 'valve_pos', 'main_drive', 'oil', '']
    'signal',
    'code',
    'description',
    'type',
    'activity',
]
res = pd.DataFrame(columns=columns)
xls = pd.ExcelFile('mapping.xlsx')

sinmachines = defaultdict(lambda: len(sinmachines) + 1)
res_row = defaultdict(str)
sheet_names = xls.sheet_names

cur_bearing_signal = None
cur_cooler_measure = None

for sheet_name in sheet_names:
    df = xls.parse(sheet_name, na_filter=False)
    res_row['exhauster_number'] = or_(lambda: int(''.join(c for c in re.search(r'№\s\d', sheet_name)[0] if c.isdigit())))
    res_row['exhauster_name'] = or_(lambda: re.search(r'\((.*?)\)', sheet_name).group(1))
    res_row['sinmachine_number'] = or_(lambda: sinmachines[res_row['exhauster_name'].split('-')[0]])
    for i in range(df.shape[0]):
        row = df.iloc[i]
        res_row['signal'], res_row['code'], res_row['description'] = row[3], row[4], row[5]
        res_row['type'], res_row['activity'] = row[6], row[7]
        match or_(lambda: row[0].split(' ')[0]):
            case "Подшипник":
                number = or_(lambda: int(row[0].split(' ')[-1]), 'unknown')
                if not any((m in res_row['signal']) for m in ['max', 'min']):
                    cur_bearing_signal, optional_limits = res_row['signal'], ''
                else:
                    optional_limits = '_' + res_row['signal']
                res_row['bearing_number'] = number
                res_row['measure'] = f'bearing_{cur_bearing_signal}' + optional_limits
            case "Охладитель":  # коллектор
                match row[1]:
                    case 'Масло':
                        cur_cooler_measure = 'oil'
                    case 'Вода':
                        cur_cooler_measure = 'water'
                res_row['measure'] = f'cooler_{cur_cooler_measure}'
            case "Газовый":  # коллектор
                res_row['measure'] = 'gas'
            case "Положение":  # задвижки
                res_row['measure'] = 'valve_pos'
            case "Главный":  # привод
                res_row['measure'] = 'main_drive'
            case "Маслосистема":
                res_row['measure'] = 'oil'
            case "Работа":
                res_row['measure'] = 'work'
        if i + 1 < df.shape[0] and df.at[i + 1, df.columns[0]] == '':
            df.at[i + 1, df.columns[0]] = row[0]
        res = res.append(res_row, ignore_index=True)
        res_row['bearing_number'] = None

res.to_csv('ou.csv', index=False)
