import { Card, DatePicker } from 'antd';
import TrendsSidebar from '@shared/TrendsSidebar';
import MyChart from '@shared/MyChart';
import { RangePickerProps } from 'antd/es/date-picker';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { setDateFrom, setDateTo } from '@reduxToolkit/slices/trends';
import dayjs from 'dayjs';
import styles from './TrendsChart.module.scss';

const { RangePicker } = DatePicker;

function TrendsChart() {
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
                <TrendsSidebar />
                <div className={styles.chart}>
                    <MyChart />
                </div>
            </div>
        </Card>
    );
}

export default TrendsChart;
