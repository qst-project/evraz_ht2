import React from 'react';
import { Collapse } from 'antd';
import BearingItem from './BearingItem';
import { BearingListProps } from './BearingList.types';
import styles from './BearingList.module.scss';

const { Panel } = Collapse;

function BearingList({ exhausterData }: BearingListProps) {
  return (
    <Collapse>
      <Panel
        key={1}
        header="Предупреждения"
      >
        <ul className={styles.list}>
          {exhausterData.problems.map((item) => (
            <BearingItem
              bearingData={item}
              key={item.name}
            />
          ))}
        </ul>
      </Panel>
      <Panel
        className={styles.list}
        key={2}
        header="Все подшипники"
      >
        <ul className={styles.list}>
          {exhausterData.bearings.map((item) => (
            <BearingItem
              bearingData={item}
              key={item.name}
            />
          ))}
        </ul>
      </Panel>
    </Collapse>
  );
}

export default BearingList;
