import { Descriptions } from 'antd'

function ExhausterInfo({ moment, delay }: any) {
    return (
        <Descriptions column={1}>
            <Descriptions.Item label='Последнее обновление'>
                {moment}
            </Descriptions.Item>
            <Descriptions.Item label='Задержка'>
                {delay}
                <pre> c</pre>
            </Descriptions.Item>
        </Descriptions>
    )
}

export default ExhausterInfo
