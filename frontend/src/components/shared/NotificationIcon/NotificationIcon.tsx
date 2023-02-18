import { BellOutlined } from '@ant-design/icons'
import { Badge } from 'antd'

function NotificationIcon() {
    return (
        <Badge size={'small'} count={5}>
            <BellOutlined />
        </Badge>
    )
}

export default NotificationIcon
