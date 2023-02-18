import { List } from 'antd'
import { INotificationItem, NotificationsPageProps } from './NotificationsList.types'

function NotificationsList({
    onChangePage,
    pageSize,
    currentPage,
    dataItems,
}: NotificationsPageProps) {
    return (
        <List
            bordered
            size='large'
            pagination={{
                onChange: onChangePage,
                total: 2,
                current: +currentPage,
                defaultCurrent: 1,
                defaultPageSize: pageSize,
                responsive: true,
            }}
            dataSource={dataItems}
            renderItem={(notificationItem: INotificationItem, index) => (
                <List.Item
                    key={index}
                >
                    {notificationItem?.message}
                </List.Item>
            )}
        />
    )
}

export default NotificationsList
