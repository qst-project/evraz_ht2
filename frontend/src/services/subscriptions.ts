import { setSinterMachines, setWebSockerConnectionError } from '@reduxToolkit/slices/sinterMachines';
import { mapSinterMachinesResponse } from '@services/mappers';

export function subscribe(
    stompClient: any,
    dispatch: any,
) {
    stompClient.subscribe(
        '/user/1/queue/messages',
        (msg: any) => {
            dispatch(setWebSockerConnectionError(false))
            const now = new Date();
            const nowGMT = now.valueOf() + (now.getTimezoneOffset() * 60000)
            const res = JSON.parse(msg.body);
            console.log(res)
            const [exhausters, moment] = (mapSinterMachinesResponse(res));
            const delay = ((nowGMT - new Date(moment).valueOf()) / 1000).toFixed(2)
            dispatch(setSinterMachines([
                exhausters,
                new Date(new Date(moment).valueOf() - (now.getTimezoneOffset() * 60000)).toLocaleString('ru'),
                Number(delay)]));
        },
    );
}

export default null
