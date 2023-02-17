import React from 'react';
import Bearing from '@shared/Bearing/Bearing';
import { Characteristics, StatusType } from '@services/types';
import MainDrive from '@shared/MainDrive/MainDrive';
import OilTank from '@shared/OilTank';
import Pipe from '@shared/Pipe/Pipe';
import BearingTrigger from '../BearingTrigger';

import styles from './Exhauster.module.scss';

function Exhauster() {
    return (
        <section className={styles.main}>
            <BearingTrigger
                bearingName='9'
                bearingStatus={StatusType.WARNING}
            />
            <Bearing
                name='1 ПС'
                status={StatusType.DEFAULT}
                characteristics={[
                    {
                        status: StatusType.DANGER,
                        type: Characteristics.TEMPERATURE,
                        value: 210,
                    },
                    {
                        status: StatusType.WARNING,
                        type: Characteristics.VERTICAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.HORIZONTAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.OIL_LEVEL,
                        value: 210,
                    },
                ]}
                style={{ top: '468px', right: '174px' }}
            />
            <Bearing
                name='2 ПС'
                status={StatusType.DEFAULT}
                characteristics={[
                    {
                        status: StatusType.DANGER,
                        type: Characteristics.TEMPERATURE,
                        value: 210,
                    },
                    {
                        status: StatusType.WARNING,
                        type: Characteristics.VERTICAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.HORIZONTAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.OIL_LEVEL,
                        value: 210,
                    },
                ]}
                style={{ top: '504px', left: '842px' }}
            />
            <Bearing
                name='3 ПС'
                status={StatusType.DEFAULT}
                characteristics={[
                    {
                        status: StatusType.WARNING,
                        type: Characteristics.TEMPERATURE,
                        value: 210,
                    },
                ]}
                style={{ bottom: '482px', right: '833px' }}
            />
            <Bearing
                name='4 ПС'
                status={StatusType.DEFAULT}
                characteristics={[
                    {
                        status: StatusType.WARNING,
                        type: Characteristics.TEMPERATURE,
                        value: 210,
                    },
                ]}
                style={{ bottom: '482px', left: '706px' }}
            />
            <Bearing
                name='5 ПС'
                status={StatusType.DEFAULT}
                characteristics={[
                    {
                        status: StatusType.WARNING,
                        type: Characteristics.TEMPERATURE,
                        value: 210,
                    },
                ]}
                style={{ top: '504px', left: '706px' }}
            />
            <Bearing
                name='6 ПС'
                status={StatusType.DEFAULT}
                characteristics={[
                    {
                        status: StatusType.DANGER,
                        type: Characteristics.TEMPERATURE,
                        value: 210,
                    },
                ]}
                style={{ top: '504px', right: '833px' }}
            />
            <Bearing
                name='7 ПС'
                status={StatusType.DEFAULT}
                characteristics={[
                    {
                        status: StatusType.DANGER,
                        type: Characteristics.TEMPERATURE,
                        value: 210,
                    },
                    {
                        status: StatusType.WARNING,
                        type: Characteristics.VERTICAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.HORIZONTAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.OIL_LEVEL,
                        value: 210,
                    },
                ]}
                style={{ top: '586px', right: '833px' }}
            />
            <Bearing
                name='8 ПС'
                status={StatusType.DEFAULT}
                characteristics={[
                    {
                        status: StatusType.DANGER,
                        type: Characteristics.TEMPERATURE,
                        value: 210,
                    },
                    {
                        status: StatusType.WARNING,
                        type: Characteristics.VERTICAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.HORIZONTAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.OIL_LEVEL,
                        value: 210,
                    },
                ]}
                style={{ top: '436px', right: '1304px' }}
            />
            <Bearing
                name='9 ПС'
                status={StatusType.DEFAULT}
                characteristics={[
                    {
                        status: StatusType.DANGER,
                        type: Characteristics.TEMPERATURE,
                        value: 210,
                    },
                    {
                        status: StatusType.WARNING,
                        type: Characteristics.VERTICAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.HORIZONTAL,
                        value: 210,
                    },
                    {
                        status: StatusType.DEFAULT,
                        type: Characteristics.OIL_LEVEL,
                        value: 210,
                    },
                ]}
                style={{ bottom: '364px', right: '1304px' }}
            />
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
            <OilTank style={{ top: '36px', right: '476px' }} />
            <Pipe style={{ top: '169px', left: '274px' }} />
        </section>
    );
}

export default Exhauster;
