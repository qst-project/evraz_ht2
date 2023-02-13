import React, { FC } from 'react'
import MainDrive from './MainDrive';
import { IMainDriveData } from './MainDrive.types';

interface MainDriveContainerProps {
}

function MainDriveContainer({ }: MainDriveContainerProps) {
    const mainDriveData: IMainDriveData[] = [
        {
            status: 1,
            type: 0,
            value: 205
        },
        {
            status: 0,
            type: 1,
            value: 0
        }, {

            status: 0,
            type: 2,
            value: 0
        }, {

            status: 0,
            type: 3,
            value: 0
        }]
    return (
        <MainDrive
            status={1}
            mainDriveData={mainDriveData}
        />
    )
}

export default MainDriveContainer