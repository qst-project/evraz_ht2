import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

import {
    HomeOutlined,
    ReadOutlined,
    LineChartOutlined,
} from '@ant-design/icons'

import { MenuProps } from './SideBarMenu.types';

function SideBarMenu({ collapsed }: MenuProps) {
    const location = useLocation()
    let selectedKeys = '1'
    switch (location.pathname) {
        case '/':
            selectedKeys = '1'
            break;
        case '/trends':
            selectedKeys = '2'
            break;
        default:
            selectedKeys = '1'
    }

    return (
        <Layout.Sider
            trigger={null}
            collapsible
            collapsed={collapsed}
        >
            <Menu
                theme='dark'
                mode='inline'
                defaultSelectedKeys={[selectedKeys]}
            >
                <Menu.Item key='1'>
                    <HomeOutlined />
                    <span>Главная</span>
                    <Link to='/' />
                </Menu.Item>
                <Menu.Item key='2'>
                    <LineChartOutlined />
                    <span>Тренды</span>
                    <Link to='/trends' />
                </Menu.Item>
                <Menu.Item key='3'>
                    <ReadOutlined />
                    <span>Журнал</span>
                    <Link to='/' />
                </Menu.Item>
            </Menu>
        </Layout.Sider>
    )
}

export default SideBarMenu
