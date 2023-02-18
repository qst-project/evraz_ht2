import React from 'react'
import { Characteristics, StatusType } from '@services/types';
import Bearing from './Bearing';

interface BearingContainerProps {
    isOpen: boolean;
}

function BearingContainer({
    isOpen,
}: BearingContainerProps) {
    const characteristics = [
        {
            status: StatusType.DANGER,
            type: Characteristics.TEMPERATURE,
            value: 200,
        },
        {
            status: StatusType.WARNING,
            type: Characteristics.VERTICAL,
            value: 140,
        },
        {
            status: StatusType.DEFAULT,
            type: Characteristics.HORIZONTAL,
            value: 298,
        },
        {
            status: StatusType.DEFAULT,
            type: Characteristics.AXIS,
            value: 200,
        },
    ];

    return (
        isOpen
            ? (
                <Bearing
                    key={1}
                    name='9 ПС'
                    status={StatusType.WARNING}
                    characteristics={characteristics}
                />
            )
            : null
    )
}

export default BearingContainer
