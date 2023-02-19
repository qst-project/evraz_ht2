import { Characteristics, CharacteristicsBackend } from '@services/types';

export const SECOND = 1000;
export const MINUTE = 60 * SECOND;
export const HOUR = 60 * MINUTE;
export const DAY = 24 * HOUR;

export enum Colors {
    PRIMARY = '#FAB82E',
    RED = 'rgb(255,18,18)',
    ORANGE = 'rgb(255,135,0)',
    RED_TRANSPARENT = 'rgba(255,46,46,0.5)',
    ORANGE_TRANSPARENT = 'rgba(255,157,46,0.5)',
    GREEN = '#2bde00',
    GREY = '#9f9f9e',
    GREY_DARK = 'rgb(61,70,70)',
    GREY_LIGHT = '#EBEBEB',
}

export const characteristicUnits = new Map<Characteristics, string>([
    [Characteristics.TEMPERATURE, 'T, °C'],
    [Characteristics.VERTICAL, 'Верт, мм/с'],
    [Characteristics.HORIZONTAL, 'Гориз, мм/с'],
    [Characteristics.OIL_LEVEL, 'Уровень масла, %'],
    [Characteristics.OIL_PRESSURE, 'Давление масла, кг/см2'],
    [Characteristics.AXIS, 'Ось, мм/с'],
    [Characteristics.AMPERAGE, 'Ток, А'],
    [Characteristics.DRIVE_AMPERAGE, 'Ток двигателя, А'],
    [Characteristics.ROTOR_VOLTAGE, 'Напряжение ротора, кВт'],
    [Characteristics.STARTER_VOLTAGE, 'Напряжение стартера, кВт'],
    [Characteristics.UNDERPRESSURE, 'Разряжение, мм.р.ст'],
    [Characteristics.GAS_TEMPERATURE, 'T газа, °C'],
    [Characteristics.WATER_BEFORE, 'T воды до, °C'],
    [Characteristics.WATER_AFTER, 'T воды после, °C'],
    [Characteristics.OIL_BEFORE, 'T масла до, °C'],
    [Characteristics.OIL_AFTER, 'T масла после, °C'],
]);

export const characteristicBackendUnits = new Map<CharacteristicsBackend, string>([
    [CharacteristicsBackend.TEMPERATURE, 'T, °C'],
    [CharacteristicsBackend.VERTICAL, 'Верт, мм/с'],
    [CharacteristicsBackend.HORIZONTAL, 'Гориз, мм/с'],
    [CharacteristicsBackend.OIL_LEVEL, 'Уровень масла, %'],
    [CharacteristicsBackend.OIL_PRESSURE, 'Давление масла, кг/см2'],
    [CharacteristicsBackend.AXIS, 'Ось, мм/с'],
    [CharacteristicsBackend.AMPERAGE, 'Ток, А'],
    [CharacteristicsBackend.DRIVE_AMPERAGE, 'Ток двигателя, А'],
    [CharacteristicsBackend.ROTOR_VOLTAGE, 'Напряжение ротора, кВт'],
    [CharacteristicsBackend.STARTER_VOLTAGE, 'Напряжение стартера, кВт'],
    [CharacteristicsBackend.UNDERPRESSURE, 'Разряжение, мм, в ст '],
    [CharacteristicsBackend.DUST_LEVEL, 'Уровень пыли, мг/м3 '],
    [CharacteristicsBackend.GAS_TEMPERATURE, 'T газа, °C'],
    [CharacteristicsBackend.WATER_BEFORE, 'T воды до, °C'],
    [CharacteristicsBackend.WATER_AFTER, 'T воды после, °C'],
    [CharacteristicsBackend.OIL_BEFORE, 'T масла до, °C'],
    [CharacteristicsBackend.OIL_AFTER, 'T масла после, °C'],
]);

export const convertCharacteristics = new Map<CharacteristicsBackend, Characteristics>([
    [CharacteristicsBackend.TEMPERATURE, Characteristics.TEMPERATURE],
    [CharacteristicsBackend.AXIS, Characteristics.AXIS],
    [CharacteristicsBackend.VERTICAL, Characteristics.VERTICAL],
    [CharacteristicsBackend.HORIZONTAL, Characteristics.HORIZONTAL],
    [CharacteristicsBackend.OIL_LEVEL, Characteristics.OIL_LEVEL],
    [CharacteristicsBackend.OIL_PRESSURE, Characteristics.OIL_PRESSURE],
    [CharacteristicsBackend.AMPERAGE, Characteristics.AMPERAGE],
    [CharacteristicsBackend.DRIVE_AMPERAGE, Characteristics.DRIVE_AMPERAGE],
    [CharacteristicsBackend.ROTOR_VOLTAGE, Characteristics.ROTOR_VOLTAGE],
    [CharacteristicsBackend.STARTER_VOLTAGE, Characteristics.STARTER_VOLTAGE],
    [CharacteristicsBackend.WATER_BEFORE, Characteristics.WATER_BEFORE],
    [CharacteristicsBackend.WATER_AFTER, Characteristics.WATER_AFTER],
    [CharacteristicsBackend.OIL_BEFORE, Characteristics.OIL_BEFORE],
    [CharacteristicsBackend.OIL_AFTER, Characteristics.OIL_AFTER],
    [CharacteristicsBackend.GAS_TEMPERATURE, Characteristics.GAS_TEMPERATURE],
    [CharacteristicsBackend.UNDERPRESSURE, Characteristics.UNDERPRESSURE],
])

export const trendsColors = [
    '#ee2c2c',
    '#f5813b',
    '#e1bd30',
    '#6de73a',
    '#44eaa4',
    '#4b82fd',
    '#8952e5',
    '#e7579e',
]
