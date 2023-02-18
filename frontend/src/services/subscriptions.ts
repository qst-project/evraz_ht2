import { setSinterMachines } from '@reduxToolkit/slices/sinterMachines';
import { mapSinterMachinesResponse } from '@services/mappers';

export function subscribe(
    stompClient: any,
    dispatch: any,
) {
    stompClient.subscribe(
        '/user/1/queue/messages',
        (msg: any) => {
            console.log('now')
            const now = new Date().valueOf();
            console.log(now)
            const res = JSON.parse(msg.body);
            console.log('delay')
            const [exhausters, moment] = (mapSinterMachinesResponse(res));
            const delay = now - new Date(moment).valueOf()
            console.log(delay)
            dispatch(setSinterMachines([exhausters, moment]));
        },
    );
}

export default null
