import { characteristicUnits } from '@services/constants'
import { Characteristics } from '@services/types'
import { List } from 'antd'
import { INotificationItem, NotificationsPageProps } from './NotificationsList.types'

function NotificationsList({
    onChangePage,
    pageSize,
    currentPage,
    dataItems,
    total,
}: NotificationsPageProps) {
    return (
        <List
            bordered
            size='large'
            pagination={{
                onChange: onChangePage,
                total,
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
                    <p>
                        {`
                            Ошибка типа ${notificationItem.type} в агломашине ${notificationItem.sinMachineNumber} в эксгаустере ${notificationItem.exhausterNumber}
                            в подшипникe ${notificationItem.bearingNumber}. Значение ${notificationItem.fieldName} было ${notificationItem.value} в ${notificationItem.moment}                            
                        `
                        }
                    </p>
                </List.Item>
            )}
        />
    )
}

export default NotificationsList
