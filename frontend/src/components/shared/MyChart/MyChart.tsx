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
    ChartDataset,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { PrometheusDriver } from 'prometheus-query';
import { useAppSelector } from '@hooks/redux';
import { getRandomColor } from '@services/utils';

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
    const { dateFrom, dateTo, selectedOptions } = useAppSelector((state) => state.trendsReducer);
    const [labels, setLabels] = useState<string[]>([]);
    const [datasets, setDatasets] = useState<ChartDataset<'line', number[]>[]>([]);

    const parseSelectedOptions = (_options: string[]) => {
        const names = _options.map((option) => option.split('/')[2]).join('|');
        const exhausters = _options.map((option) => option.split('/')[1]).join('|');
        return `{__name__=~"${names}", exhauster_number=~"${exhausters}", bearing_number="1"}`;
    }

    useEffect(() => {
        const query = parseSelectedOptions(selectedOptions);
        const step = 200;

        prom.rangeQuery(query, dateFrom, dateTo, step)
            .then((res) => {
                const innerDatasets: ChartDataset<'line', number[]>[] = [];
                const series = res.result;
                series.forEach((serie) => {
                    setLabels(serie.values.map(
                        (value: { time: Date }) => getChartTime(value.time),
                    ));
                    const color = getRandomColor();
                    const data = {
                        data: serie.values.map((value: { value: number }) => value.value),
                        label: serie.metric.labels.measure as string,
                        backgroundColor: color,
                        borderColor: color,
                    }
                    innerDatasets.push(data);
                });
                setDatasets(innerDatasets);
            })
            .catch(console.error);
    }, [dateFrom, dateTo, selectedOptions])

    return (
        <Line
            options={options}
            data={{
                labels,
                datasets,
            }}
        />
    );
}

export default MyChart;
