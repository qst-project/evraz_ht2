import React from 'react';
import { BearingData, CharacteristicData, Characteristics } from '@services/types';
import TrendsOption from '@shared/TrendsOption';
import { Collapse } from 'antd';
import { TrendsItemProps } from '@shared/TrendsItem/TrendsItem.types';
import { convertCharacteristics } from '@services/constants';

const { Panel } = Collapse;

function TrendsItem({ bearing, exhauster }: TrendsItemProps) {
    const getTrendsOptionName = (_bearing: BearingData, characteristic: CharacteristicData) => `${exhauster.id}/${_bearing.number}/${characteristic.type}`;

    return (
        <Collapse size='small' bordered={false}>
            <Panel key={1} header={bearing.name}>
                {bearing.characteristics.map((characteristic) => (
                    <TrendsOption
                        label={convertCharacteristics.get(characteristic.type) as Characteristics}
                        name={getTrendsOptionName(bearing, characteristic)}
                        key={characteristic.type}
                    />
                ))}
            </Panel>
        </Collapse>
    );
}

export default TrendsItem;
