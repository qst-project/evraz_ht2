import { Descriptions } from 'antd'

function ExhausterInfo({ time }: any) {
    return (
        <Descriptions>
            <Descriptions.Item label='Последнее обновление'>
                {time}
            </Descriptions.Item>
            <Descriptions.Item label='Задержка'>
                {time}
            </Descriptions.Item>
        </Descriptions>
    )
}

export default ExhausterInfo
