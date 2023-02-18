import { ReactComponent as Valve } from '@images/union.svg';
import { Row } from 'antd';

function GasValve({
    value,
    gasValveOpen,
    gasValveClosed,
}: any) {
    let left
    if (value !== null) {
        left = `${233 + ((value * 79) / 100)}px`
    } else if (gasValveOpen) {
        left = '233px'
    } else {
        left = '312px'
    }

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
