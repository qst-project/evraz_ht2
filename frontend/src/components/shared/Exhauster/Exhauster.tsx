import React from 'react';
import Bearing from '@shared/Bearing/Bearing';
import { Characteristics, StatusType } from '@services/types';
import MainDrive from '@shared/MainDrive/MainDrive';
import OilTank from '@shared/OilTank';
import Pipe from '@shared/Pipe/Pipe';
import BearingTrigger from '@shared/BearingTrigger';
import TemperatureSensorContainer from '@shared/TemperatureSensor';
import { ExhausterState } from '@reduxToolkit/slices/exhauster';
import TimingInfo from '@shared/TimingInfo';

import styles from './Exhauster.module.scss';
import OilPressureContainer from '../OilPressure';

function Exhauster({ status, exhauster }: ExhausterState) {
    return (
        <section className={styles.main}>
            <TimingInfo time='2.34.0' />
            <TemperatureSensorContainer
                style={{
                    top: '25px',
                    left: '1067px',
                }}
            />
            <TemperatureSensorContainer
                style={{
                    top: '25px',
                    left: '1150px',
                }}
            />
            <TemperatureSensorContainer
                style={{
                    top: '195px',
                    left: '1110px',
                }}
            />
            <TemperatureSensorContainer
                style={{
                    top: '119px',
                    left: '993px',
                }}
            />
            {exhauster
                ? (
                    <>
                        <Bearing
                            name='1 ПС'
                            status={StatusType.DEFAULT}
                            characteristics={exhauster?.bearings[0].characteristics}
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
                            characteristics={exhauster?.bearings[1].characteristics}
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
                            characteristics={exhauster?.bearings[2].characteristics}
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
                            characteristics={exhauster?.bearings[3].characteristics}
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
                            characteristics={exhauster?.bearings[4].characteristics}
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
                            characteristics={exhauster?.bearings[5].characteristics}
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
                            characteristics={exhauster?.bearings[6].characteristics}
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
                            characteristics={exhauster?.bearings[7].characteristics}
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
                            characteristics={exhauster?.bearings[8].characteristics}
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
                characteristics={[
                    {
                        status: StatusType.DANGER,
                        type: Characteristics.AMPERAGE,
                        value: 210,
                    },
                    {
                        status: StatusType.WARNING,
                        type: Characteristics.DRIVE_AMPERAGE,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.ROTOR_VOLTAGE,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.STARTER_VOLTAGE,
                        value: 210,
                    },
                ]}
                style={{ top: '276px', left: '966px' }}
            />
            <OilTank style={{ top: '36px', right: '530px' }} />
            <Pipe style={{ top: '169px', left: '272px' }} />
            <OilPressureContainer
                style={{
                    top: '202px',
                    left: '1227px',
                }}
                oilPressureData={{
                    status: StatusType.WARNING,
                    value: 2.1,
                }}
            />
        </section>
    );
}

export default Exhauster;
