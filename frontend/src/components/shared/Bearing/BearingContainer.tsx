import React from 'react'
import { CharacteristicsBackend, StatusType } from '@services/types';
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
            type: CharacteristicsBackend.TEMPERATURE,
            value: 200,
        },
        {
            status: StatusType.WARNING,
            type: CharacteristicsBackend.VERTICAL,
            value: 140,
        },
        {
            status: StatusType.DEFAULT,
            type: CharacteristicsBackend.HORIZONTAL,
            value: 298,
        },
        {
            status: StatusType.DEFAULT,
            type: CharacteristicsBackend.AXIS,
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
                    // characteristics={characteristics}
                    characteristics={[{ status: StatusType.DANGER, value: { value: 0, moment: '', }, type: CharacteristicsBackend.AMPERAGE }]}
                />
            )
            : null
    )
}

export default BearingContainer
