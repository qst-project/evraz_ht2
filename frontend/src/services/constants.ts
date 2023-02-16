import { Characteristics } from '@services/types';

export enum Colors {
    RED = 'rgb(255,18,18)',
    ORANGE = 'rgb(255,135,0)',
    RED_TRANSPARENT = 'rgba(255,46,46,0.5)',
    ORANGE_TRANSPARENT = 'rgba(255,157,46,0.5)',
    GREEN = '#2bde00',
    GREY = '#9f9f9e',
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
]);
