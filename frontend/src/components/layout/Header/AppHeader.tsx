import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Col, Row } from 'antd';
import NotificationModal from '@components/shared/NotificationModal/NotificationModal';

import { HeaderProps } from './AppHeader.types';

function AppHeader({ setCollapsed, collapsed }: HeaderProps) {
    return (
        <Row
            justify='space-around'
            align='middle'
        >
            <Col span={22}>
                {
                    React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })
                }
            </Col>
            <Col span={2}>
                <NotificationModal />
            </Col>
        </Row>
    );
}

export default AppHeader;
