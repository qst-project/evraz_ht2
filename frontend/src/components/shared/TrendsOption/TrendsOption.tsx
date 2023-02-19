import React from 'react';
import { Checkbox } from 'antd';
import { characteristicUnits } from '@services/constants';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { addOption, removeOption } from '@reduxToolkit/slices/trends';
import styles from './TrendsOption.module.scss';
import { TrendsOptionProps } from './TrendsOption.types';

function TrendsOption({
    label,
    name,
}: TrendsOptionProps) {
    const { selectedOptions } = useAppSelector((state) => state.trendsReducer);
    const dispatch = useAppDispatch();
    const onChange = (e: CheckboxChangeEvent) => {
        if (e.target.checked) {
            dispatch(addOption(name));
        } else {
            dispatch(removeOption(name));
        }
    }

    return (
        <div className={styles.main}>
            <Checkbox
                defaultChecked={selectedOptions.includes(name)}
                onChange={onChange}
            >
                {characteristicUnits.get(label)}
            </Checkbox>
        </div>
    );
}

export default TrendsOption;
