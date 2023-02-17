import React from 'react'
import { Characteristics, StatusType } from '@services/types';

import MainDrive from './MainDrive';

function MainDriveContainer() {
    const characteristics = [
        {
            status: StatusType.WARNING,
            name: Characteristics.AMPERAGE,
            value: 10,
        },
        {
            status: StatusType.DEFAULT,
            name: Characteristics.DRIVE_AMPERAGE,
            value: 0,
        }, {

            status: StatusType.DEFAULT,
            name: Characteristics.ROTOR_VOLTAGE,
            value: 0,
        }, {

            status: StatusType.DEFAULT,
            name: Characteristics.STARTER_VOLTAGE,
            value: 0,
        }]
    return (
        <MainDrive
            status={StatusType.WARNING}
            characteristics={characteristics}
        />
    )
}

export default MainDriveContainer
