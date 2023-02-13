import React, { FC } from 'react'
import { Card, Descriptions, Typography } from 'antd';

import styles from './MainDrive.module.scss'
import {
    MainDriveProps,
    MainDrivePropsItemType,
} from './MainDrive.types';

import { StatusType } from '@services/types';

const defaultStyle = {
}

const dangerStyle = {
    border: '1px solid #f5573b',
}

const warningStyle = {
    border: '1px solid #f5c134',
}

const typeStatusStyles = new Map<number, object>([
    [StatusType.Default, defaultStyle],
    [StatusType.Danger, dangerStyle],
    [StatusType.Warning, warningStyle],
]);

const typeDataUnits = new Map<number, string>([
    [MainDrivePropsItemType.Amperage, 'Tок, А'],
    [MainDrivePropsItemType.MotorAmperage, 'Ток двигателся, А'],
    [MainDrivePropsItemType.RoterVoltage, 'Напряжение ротера, кВт'],
    [MainDrivePropsItemType.StarterVoltage, 'Напряжение статера, кВт'],
]);

const typeStatusClassName = new Map<number, string>([
    [StatusType.Default, styles.default],
    [StatusType.Danger, styles.danger],
    [StatusType.Warning, styles.warning],
]);

function MainDrive({
    status,
    mainDriveData
}: MainDriveProps) {
    return (
        <Card
            bordered
            title='Главный привод'
            style={typeStatusStyles.get(status)}
            headStyle={{ backgroundColor: '#4A4B4A', color: '#ffffff' }}
            bodyStyle={{ backgroundColor: '#E0E0E0', color: '#ffffff' }}
        >
            <Descriptions
                bordered
                size='small'
                column={1}
            >
                {
                    mainDriveData.map(
                        (mainDrivePropsData, index) => (
                            <Descriptions.Item
                                key={index}
                                className={typeStatusClassName.get(mainDrivePropsData.status)}
                                label={
                                    <Typography.Text strong>
                                        {typeDataUnits.get(mainDrivePropsData.type)}
                                    </Typography.Text>

                                }
                            >
                                {mainDrivePropsData.value}
                            </Descriptions.Item>
                        ))
                }
            </Descriptions>
        </Card>
    );
}

export default MainDrive
