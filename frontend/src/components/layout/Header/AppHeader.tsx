import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Col, Row } from 'antd';
import NotificationIconContainer from '@components/shared/NotificationIcon';

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
                <NotificationIconContainer />
            </Col>
        </Row>
    );
}

export default AppHeader;
