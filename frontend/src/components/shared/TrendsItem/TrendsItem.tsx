import React from 'react';
import { BearingData, CharacteristicData } from '@services/types';
import TrendsOption from '@shared/TrendsOption';
import { Collapse } from 'antd';
import { TrendsItemProps } from '@shared/TrendsItem/TrendsItem.types';
import { useAppSelector } from '@hooks/redux';

const { Panel } = Collapse;

function TrendsItem({ bearing }: TrendsItemProps) {
    const { exhauster } = useAppSelector((state) => state.trendsReducer);

    const getTrendsOptionName = (_bearing: BearingData, characteristic: CharacteristicData) => `${exhauster.id}/${_bearing.number}/${characteristic.type}`;

    return (
        <Collapse size='small' bordered={false}>
            <Panel key={1} header={bearing.name}>
                {bearing.characteristics.map((characteristic) => (
                    <TrendsOption
                        label={characteristic.type}
                        value={characteristic.value}
                        name={getTrendsOptionName(bearing, characteristic)}
                        key={characteristic.type}
                    />
                ))}
            </Panel>
        </Collapse>
    );
}

export default TrendsItem;
