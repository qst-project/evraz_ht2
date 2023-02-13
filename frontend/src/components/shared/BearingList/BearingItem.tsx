import React from 'react';
import { Characteristics, StatusType } from '@services/types';
import { Colors } from '@services/constants';
import { BearingItemProps } from './BearingList.types';
import styles from './BearingList.module.scss';

const statusSchema = {
  [StatusType.Default]: {
    style: {},
  },
  [StatusType.Danger]: {
    style: {
      backgroundColor: Colors.RED_TRANSPARENT,
      borderColor: Colors.RED,
      boxShadow: `0 0 4px 0 ${Colors.RED}`,
      color: Colors.RED,
    },
  },
  [StatusType.Warning]: {
    style: {
      backgroundColor: Colors.ORANGE_TRANSPARENT,
      borderColor: Colors.ORANGE,
      boxShadow: `0 0 4px 0 ${Colors.ORANGE}`,
      color: Colors.ORANGE,
    },
  },
};

const abbreviations = {
  [Characteristics.TEMPERATURE]: 'T',
  [Characteristics.OIL_LEVEL]: 'L',
};

function BearingItem({ bearingData }: BearingItemProps) {
  return (
    <li className={styles.item}>
      <span>{bearingData.name}</span>
      <ul className={styles.characteristics}>
        {bearingData.characteristics.map((item) => (
          <li
            className={styles.characteristic}
            key={item.name}
            style={statusSchema[item.status].style}
          >
            {abbreviations[item.name]}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default BearingItem;
