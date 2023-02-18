import React from 'react'
import { Dropdown, MenuProps } from 'antd'
import NotificationIcon from '../NotificationIcon/NotificationIcon'

function NotificationModal() {
    const items: MenuProps['items'] = [
        {
            label: '1st menu item',
            key: '1',
        },
        {
            label: '2nd menu item',
            key: '2',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    return (
        <Dropdown
            menu={{ items }}
        >
            <div><NotificationIcon /></div>
        </Dropdown>
    )
}

export default NotificationModal
