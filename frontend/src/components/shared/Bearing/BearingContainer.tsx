import React from 'react'
import Bearing from './Bearing';
import { IBearingPropsItem } from './Bearing.types';

interface BearingContainerProps {
    isOpen: boolean;
}

function BearingContainer({
    isOpen,
}: BearingContainerProps) {
    const bearingPropsData: IBearingPropsItem[] = [
        {
            status: 2,
            type: 0,
            value: 200,
        },
        {
            status: 1,
            type: 1,
            value: 200,
        }, {

            status: 0,
            type: 2,
            value: 200,
        }, {

            status: 0,
            type: 3,
            value: 200,
        }]
    return (
        isOpen
            ? (
                <Bearing
                    key={1}
                    name='9 ПС'
                    status={1}
                    bearingData={bearingPropsData}
                />
            )
            : null
    )
}

export default BearingContainer
