import { setExhauster } from '@reduxToolkit/slices/exhauster';
import { mapSinterMachinesResponse } from '@services/mappers';

export function subscribe(
    stompClient: any,
    dispatch: any,
) {
    stompClient.subscribe(
        '/user/1/queue/messages',
        (msg: any) => {
            const res = JSON.parse(msg.body);
            const exhausters = (mapSinterMachinesResponse(res));
            dispatch(setExhauster(exhausters[0].exhausters[0]));
        },
    );
}

export default null
