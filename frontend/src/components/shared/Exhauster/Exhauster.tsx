import React from 'react';
import Bearing from '@shared/Bearing/Bearing';
import { StatusType } from '@services/types';
import MainDrive from '@shared/MainDrive/MainDrive';
import OilTank from '@shared/OilTank';
import Pipe from '@shared/Pipe/Pipe';
import BearingTrigger from '@shared/BearingTrigger';
import TemperatureSensorContainer from '@shared/TemperatureSensor';
import TimingInfo from '@shared/TimingInfo';
import GasValve from '@components/GasValve/GasValve';

import styles from './Exhauster.module.scss';
import OilPressureContainer from '../OilPressure';
import { ExhausterProps } from './Exhauster.types';

function Exhauster({ exhauster, moment, delay }: ExhausterProps) {
    return (
        <section className={styles.main}>
            <TimingInfo moment={moment} delay={delay} />
            <TemperatureSensorContainer
                style={{
                    top: '25px',
                    left: '1067px',
                }}
                value={exhauster.coolerWaterTemperatureBefore}
            />
            <TemperatureSensorContainer
                style={{
                    top: '25px',
                    left: '1150px',
                }}
                value={exhauster.coolerWaterTemperatureAfter}
            />
            <TemperatureSensorContainer
                style={{
                    top: '195px',
                    left: '1110px',
                }}
                value={exhauster.coolerOilTemperatureAfter}
            />
            <TemperatureSensorContainer
                style={{
                    top: '119px',
                    left: '993px',
                }}
                value={exhauster.coolerOilTemperatureBefore}
            />
            {exhauster
                ? (
                    <>
                        <Bearing
                            name='1 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={
                                exhauster?.bearings
                                    .find((bearing) => bearing.number === 1)?.characteristics
                                || exhauster?.problems
                                    .find((problem) => problem.number === 1)?.characteristics
                            }
                            style={{ top: '468px', right: '174px' }}
                        />
                        <BearingTrigger
                            bearingName='1'
                            bearingStatus={StatusType.WARNING}
                            style={{
                                position: 'absolute',
                                top: '371px',
                                left: '1241px',
                            }}
                        />
                        <Bearing
                            name='2 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={
                                exhauster?.bearings
                                    .find((bearing) => bearing.number === 2)?.characteristics
                                || exhauster?.problems
                                    .find((problem) => problem.number === 2)?.characteristics
                            }
                            style={{ top: '504px', left: '842px' }}
                        />
                        <BearingTrigger
                            bearingName='2'
                            bearingStatus={StatusType.WARNING}
                            style={{
                                position: 'absolute',
                                top: '360px',
                                left: '911px',
                            }}
                        />
                        <Bearing
                            name='3 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={
                                exhauster?.bearings
                                    .find((bearing) => bearing.number === 3)?.characteristics
                                || exhauster?.problems
                                    .find((problem) => problem.number === 3)?.characteristics
                            }
                            style={{ bottom: '482px', right: '833px' }}
                        />
                        <BearingTrigger
                            bearingName='5'
                            bearingStatus={StatusType.WARNING}
                            style={{
                                position: 'absolute',
                                top: '434px',
                                left: '719px',
                            }}
                        />
                        <Bearing
                            name='4 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={
                                exhauster?.bearings
                                    .find((bearing) => bearing.number === 4)?.characteristics
                                || exhauster?.problems
                                    .find((problem) => problem.number === 4)?.characteristics
                            }
                            style={{ bottom: '482px', left: '706px' }}
                        />
                        <BearingTrigger
                            bearingName='4'
                            bearingStatus={StatusType.WARNING}
                            style={{
                                position: 'absolute',
                                top: '352px',
                                left: '719px',
                            }}
                        />
                        <Bearing
                            name='5 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={
                                exhauster?.bearings
                                    .find((bearing) => bearing.number === 5)?.characteristics
                                || exhauster?.problems
                                    .find((problem) => problem.number === 5)?.characteristics
                            }
                            style={{ top: '504px', left: '706px' }}
                        />
                        <BearingTrigger
                            bearingName='3'
                            bearingStatus={StatusType.WARNING}
                            style={{
                                position: 'absolute',
                                top: '352px',
                                left: '637px',
                            }}
                        />
                        <Bearing
                            name='6 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={
                                exhauster?.bearings
                                    .find((bearing) => bearing.number === 6)?.characteristics
                                || exhauster?.problems
                                    .find((problem) => problem.number === 6)?.characteristics
                            }
                            style={{ top: '504px', right: '833px' }}
                        />
                        <BearingTrigger
                            bearingName='6'
                            bearingStatus={StatusType.WARNING}
                            style={{
                                position: 'absolute',
                                top: '434px',
                                left: '637px',
                            }}
                        />
                        <Bearing
                            name='7 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={
                                exhauster?.bearings
                                    .find((bearing) => bearing.number === 7)?.characteristics
                                || exhauster?.problems
                                    .find((problem) => problem.number === 7)?.characteristics
                            }
                            style={{ top: '586px', right: '900px' }}
                        />
                        <BearingTrigger
                            bearingName='7'
                            bearingStatus={StatusType.WARNING}
                            style={{
                                position: 'absolute',
                                top: '402px',
                                left: '426px',
                            }}
                        />
                        <Bearing
                            name='8 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={
                                exhauster?.bearings
                                    .find((bearing) => bearing.number === 8)?.characteristics
                                || exhauster?.problems
                                    .find((problem) => problem.number === 8)?.characteristics
                            }
                            style={{ top: '436px', right: '1304px' }}
                        />
                        <BearingTrigger
                            bearingName='8'
                            bearingStatus={StatusType.WARNING}
                            style={{
                                position: 'absolute',
                                top: '402px',
                                left: '234px',
                            }}
                        />
                        <Bearing
                            name='9 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={
                                exhauster?.bearings
                                    .find((bearing) => bearing.number === 9)?.characteristics
                                || exhauster?.problems
                                    .find((problem) => problem.number === 9)?.characteristics
                            }
                            style={{ bottom: '364px', right: '1304px' }}
                        />
                        <BearingTrigger
                            bearingName='9'
                            bearingStatus={StatusType.DANGER}
                            style={{
                                position: 'absolute',
                                top: '372px',
                                left: '234px',
                            }}
                        />
                    </>
                ) : null}
            <MainDrive
                status={StatusType.DEFAULT}
                characteristics={exhauster.mainDriveCharacteristics}
                style={{ top: '276px', left: '966px' }}
            />
            <OilTank
                value={exhauster.oilLevel}
                style={{ top: '36px', right: '530px' }}
            />
            <Pipe
                temperature={exhauster.gasCollectorTemperatureBefore}
                underpressure={10}
                style={{ top: '169px', left: '272px' }}
            />
            <OilPressureContainer
                style={{
                    top: '202px',
                    left: '1227px',
                }}
                oilPressureData={{
                    status: StatusType.DEFAULT,
                    value: exhauster.oilPressure,
                }}
            />
            <GasValve value={exhauster.gasValvePosition} />
        </section>
    );
}

export default Exhauster;
