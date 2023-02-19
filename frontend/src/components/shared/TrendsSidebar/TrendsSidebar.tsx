import React from 'react';
import { Collapse } from 'antd';
import { useAppSelector } from '@hooks/redux';
import TrendsItem from '@shared/TrendsItem';
import TrendsOption from '@shared/TrendsOption';
import { Characteristics } from '@services/types';
import styles from './TrendsSidebar.module.scss';

const { Panel } = Collapse;

function TrendsSidebar() {
    const { machines } = useAppSelector((state) => state.sinter_machines);
    if (!machines) {
        return null;
    }
    const exhauster = machines[0].exhausters[0];

    const getOptionName = (characteristic: Characteristics) => (
        `${exhauster.id}/${characteristic}`
    )

    return (
        <div className={styles.main}>
            <Collapse size='small'>
                <Panel key={1} header='Подшипники'>
                    {exhauster.problems.map((bearing) => (
                        <TrendsItem bearing={bearing} key={bearing.name} />
                    ))}
                    {exhauster.bearings.map((bearing) => (
                        <TrendsItem bearing={bearing} key={bearing.name} />
                    ))}
                </Panel>
                <Panel key={2} header='Маслобак'>
                    <TrendsOption
                        label={Characteristics.OIL_LEVEL}
                        name={getOptionName(Characteristics.OIL_LEVEL)}
                    />
                    <TrendsOption
                        label={Characteristics.OIL_PRESSURE}
                        name={getOptionName(Characteristics.OIL_PRESSURE)}
                    />
                </Panel>
                <Panel key={3} header='Главный привод'>
                    <TrendsOption
                        label={Characteristics.AMPERAGE}
                        name={getOptionName(Characteristics.AMPERAGE)}
                    />
                    <TrendsOption
                        label={Characteristics.DRIVE_AMPERAGE}
                        name={getOptionName(Characteristics.DRIVE_AMPERAGE)}
                    />
                    <TrendsOption
                        label={Characteristics.ROTOR_VOLTAGE}
                        name={getOptionName(Characteristics.ROTOR_VOLTAGE)}
                    />
                    <TrendsOption
                        label={Characteristics.STARTER_VOLTAGE}
                        name={getOptionName(Characteristics.STARTER_VOLTAGE)}
                    />
                </Panel>
                <Panel key={4} header='Охладитель'>
                    <TrendsOption
                        label={Characteristics.WATER_BEFORE}
                        name={getOptionName(Characteristics.WATER_BEFORE)}
                    />
                    <TrendsOption
                        label={Characteristics.WATER_AFTER}
                        name={getOptionName(Characteristics.WATER_AFTER)}
                    />
                    <TrendsOption
                        label={Characteristics.OIL_BEFORE}
                        name={getOptionName(Characteristics.OIL_BEFORE)}
                    />
                    <TrendsOption
                        label={Characteristics.OIL_AFTER}
                        name={getOptionName(Characteristics.OIL_AFTER)}
                    />
                </Panel>
                <Panel key={5} header='Газовый коллектор'>
                    <TrendsOption
                        label={Characteristics.GAS_TEMPERATURE}
                        name={getOptionName(Characteristics.GAS_TEMPERATURE)}
                    />
                    <TrendsOption
                        label={Characteristics.UNDERPRESSURE}
                        name={getOptionName(Characteristics.UNDERPRESSURE)}
                    />
                </Panel>
            </Collapse>
        </div>
    );
}

export default TrendsSidebar;
