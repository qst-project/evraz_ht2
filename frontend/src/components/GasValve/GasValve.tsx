import { ReactComponent as Valve } from '@images/union.svg';
import { Row } from 'antd';

function GasValve({ value }: any) {
    const left = `${233 + ((value * 79) / 100)}px`
    return (
        <div style={{
            top: '660px',
            left,
        }}>
            <Row align='middle' justify='center'>
                <Valve />
            </Row>
            {value}
        </div>
    )
}

export default GasValve
