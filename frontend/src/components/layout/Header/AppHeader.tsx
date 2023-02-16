import React from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Col, Row } from 'antd';

import { HeaderProps } from './AppHeader.types';

function AppHeader({ setCollapsed, collapsed }: HeaderProps) {
    return (
        <Row
            justify='space-between'
            align='middle'
        >
            <Col span={24}>
                {
                    React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => setCollapsed(!collapsed),
                    })
                }
            </Col>
        </Row>
    );
}

export default AppHeader;
