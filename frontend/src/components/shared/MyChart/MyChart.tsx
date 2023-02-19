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
import { Characteristics } from '@services/types';

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

const getPromQueryFromName = (name: string) => {
    const split = name.split('/');
    if (split.length === 2) {
        switch (split[1]) {
            case Characteristics.WATER_BEFORE:
                return `{__name__="temperature_before", measure="cooler_water", exhauster_number=~"${split[0]}"}`;
            case Characteristics.WATER_AFTER:
                return `{__name__="temperature_after", measure="cooler_water", exhauster_number=~"${split[0]}"}`;
            case Characteristics.OIL_BEFORE:
                return `{__name__="temperature_before", measure="cooler_oil", exhauster_number=~"${split[0]}"}`;
            case Characteristics.OIL_AFTER:
                return `{__name__="temperature_after", measure="cooler_oil", exhauster_number=~"${split[0]}"}`;
            case Characteristics.GAS_TEMPERATURE:
                return `{__name__="temperature_before", measure="gas", exhauster_number=~"${split[0]}"}`;
            default:
                return `{__name__="${split[1]}", exhauster_number=~"${split[0]}"}`;
        }
    }
    return `{__name__="${split[2]}", exhauster_number=~"${split[0]}", bearing_number="${split[1]}"}`;
}

const getChartTime = (date: Date) => date.toString().split(' ')[4]

function MyChart() {
    const { dateFrom, dateTo, selectedOptions } = useAppSelector((state) => state.trendsReducer);
    const [labels, setLabels] = useState<string[]>([]);
    const [datasets, setDatasets] = useState<ChartDataset<'line', number[]>[]>([]);

    const parseSelectedOptions = (_options: string[]) => {
        setDatasets([]);
        let shouldUpdateLabels = true;
        const step = 200;
        _options.forEach((option) => {
            const query = getPromQueryFromName(option);
            prom.rangeQuery(query, dateFrom, dateTo, step)
                .then((res) => {
                    const innerDatasets: ChartDataset<'line', number[]>[] = [];
                    const series = res.result;
                    series.forEach((serie) => {
                        if (shouldUpdateLabels) {
                            setLabels(serie.values.map(
                                (value: { time: Date }) => getChartTime(value.time),
                            ));
                            shouldUpdateLabels = false;
                        }
                        const color = getRandomColor();
                        const data = {
                            data: serie.values.map((value: { value: number }) => value.value),
                            label: serie.metric.labels.measure as string,
                            backgroundColor: color,
                            borderColor: color,
                        }
                        innerDatasets.push(data);
                        console.log(innerDatasets);
                    });
                    setDatasets((prevState) => [...prevState, ...innerDatasets]);
                })
                .catch(console.error);
        })
        return '';
    }

    useEffect(() => {
        parseSelectedOptions(selectedOptions);
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
