import React from 'react';
import { Collapse } from 'antd';
import { useAppSelector } from '@hooks/redux';
import TrendsItem from '@shared/TrendsItem';
import styles from './TrendsSidebar.module.scss';

const { Panel } = Collapse;

function TrendsSidebar() {
    const { exhauster } = useAppSelector((state) => state.trendsReducer);

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
            </Collapse>
        </div>
    );
}

export default TrendsSidebar;
