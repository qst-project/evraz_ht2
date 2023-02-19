import { Button, Card, DatePicker } from 'antd';
import TrendsSidebar from '@shared/TrendsSidebar';
import MyChart from '@shared/MyChart';
import { RangePickerProps } from 'antd/es/date-picker';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setDateFrom, setDateTo } from '@reduxToolkit/slices/trends';
import dayjs from 'dayjs';
import { TrendsChartProps } from '@shared/TrendsChart/TrendsChart.types';
import { NavLink } from 'react-router-dom';
import React from 'react';
import styles from './TrendsChart.module.scss';

const { RangePicker } = DatePicker;

function TrendsChart({ exhauster }: TrendsChartProps) {
    const { dateFrom, dateTo } = useAppSelector((state) => state.trendsReducer);
    const dispatch = useAppDispatch();

    const changeRange = (value: RangePickerProps['value']) => {
        if (!value) return;
        if (value[0]) {
            dispatch(setDateFrom(new Date(value[0].toString()).getTime()));
        }
        if (value[1]) {
            dispatch(setDateTo(new Date(value[1].toString()).getTime()));
        }
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'end', width: '100%' }}>
                <NavLink
                    to={`/exhauster?machine_id=${exhauster.sinterMachineId}&exhauster_id=${exhauster.id}`}
                    style={{ margin: '16px' }}
                >
                    <Button type='primary'>
                        К эксгаустеру
                    </Button>
                </NavLink>
            </div>
            <Card
                title='Эксгаустер X-172'
                className={styles.main}
            >
                <div className={styles.rangePicker}>
                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format='YYYY-MM-DD HH:mm'
                        onChange={changeRange}
                        defaultValue={[dayjs(dateFrom), dayjs(dateTo)]}
                    />
                </div>
                <div className={styles.content}>
                    <TrendsSidebar exhauster={exhauster} />
                    <div className={styles.chart}>
                        <MyChart />
                    </div>
                </div>
            </Card>
        </>
    );
}

export default TrendsChart;
