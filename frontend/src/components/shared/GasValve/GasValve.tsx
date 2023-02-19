import { ReactComponent as Valve } from '@images/union.svg';
import { Row, Tooltip } from 'antd';

function GasValve({
    value,
    gasValveOpen,
    gasValveClosed,
}: any) {
    let left
    if (value.value !== null && value.value !== undefined) {
        left = `${233 + ((value.value * 79) / 100)}px`
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
            <Tooltip title={value.moment}>
                <Row align='middle' justify='center'>
                    <Valve />
                </Row>
                {value.value}
            </Tooltip>

        </div>
    )
}

export default GasValve
