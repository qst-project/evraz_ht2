import React from 'react';
import { Checkbox } from 'antd';
import { characteristicUnits } from '@services/constants';
import styles from './TrendsOption.module.scss';
import { TrendsOptionProps } from './TrendsOption.types';

function TrendsOption({ name, value }: TrendsOptionProps) {
  return (
    <div className={styles.main}>
      <Checkbox>{`${characteristicUnits.get(name)}: ${value}`}</Checkbox>
    </div>
  );
}

export default TrendsOption;
