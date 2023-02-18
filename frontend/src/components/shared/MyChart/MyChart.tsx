import React, { useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PrometheusDriver } from 'prometheus-query';
import { useAppSelector } from '@hooks/redux';

const prom = new PrometheusDriver({
    endpoint: 'http://localhost:9099',
    baseURL: '/api/v1', // default value
});

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const getChartTime = (date: Date) => date.toString().split(' ')[4]

function MyChart() {
    const { dateFrom, dateTo } = useAppSelector((state) => state.trendsReducer);
    const [labels, setLabels] = useState<string[]>([]);
    const [data, setData] = useState<number[]>([]);

    useEffect(() => {
        const query = 'my_metric';
        const step = 200;

        prom.rangeQuery(query, dateFrom, dateTo, step)
            .then((res) => {
                const series = res.result;
                series.forEach((serie) => {
                    setLabels(serie.values.map(
                        (value: { time: Date }) => getChartTime(value.time),
                    ));
                    setData(serie.values.map((value: { value: number }) => value.value));
                });
            })
            .catch(console.error);
    }, [dateFrom, dateTo])

    return (
        <Line
            options={options}
            data={{
                labels,
                datasets: [
                    {
                        label: 'Dataset 1',
                        data,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                ],
            }}
        />
    );
}

export default MyChart;
