import React, { useState } from 'react';
import { Col, Row } from 'antd';

import BearingContainer from '@components/shared/Bearing';
import BearingTrigger from '@components/shared/BearingTrigger';
import MainDriveContainer from '@components/shared/MainDrive';
import PipeContainer from '@components/shared/Pipe';
import OilPressureContainer from '@components/shared/OilPressure';
import TemperatureSensorContainer from '@components/shared/TemperatureSensor';
import OilTankContainer from '@components/shared/OilTank/OilTankContainer';
import PageLayout from '@components/layout/PageLayout/PageLayout';

import { StatusType } from '@services/types';

function MainPage() {
    const [showBearing, setShowBearing] = useState(true)
    return (
        <PageLayout>
            <Row justify='space-around'>
                <Col>
                    <BearingTrigger
                        bearingName='9 ПC'
                        bearingStatus={StatusType.DEFAULT}
                        showBearing={showBearing}
                        setShowBearing={setShowBearing}
                    />
                </Col>
                <Col>
                    <TemperatureSensorContainer />
                </Col>
            </Row>
            <Row justify='space-around'>
                <Col>
                    <BearingContainer isOpen={showBearing} />
                </Col>
                <Col>
                    <OilTankContainer />
                </Col>
                <Col>
                    <MainDriveContainer />
                </Col>
                <Col>
                    <OilPressureContainer
                        oilPressureData={{ status: StatusType.WARNING, value: 2.1 }}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <PipeContainer />
                </Col>
            </Row>
        </PageLayout>

    );
}

export default MainPage;
