import { setSinterMachines } from '@reduxToolkit/slices/sinter_machines';
import { mapSinterMachinesResponse } from '@services/mappers';

export function subscribe(
    stompClient: any,
    dispatch: any,
) {
    stompClient.subscribe(
        '/user/1/queue/messages',
        (msg: any) => {
            const res = JSON.parse(msg.body);
            const [exhausters, moment] = (mapSinterMachinesResponse(res));
            console.log(res)
            dispatch(setSinterMachines([exhausters, moment]));
        },
    );
}

export default null
