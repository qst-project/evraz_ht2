import { setSinterMachines, setWebSockerConnectionError } from '@reduxToolkit/slices/sinterMachines';
import { mapSinterMachinesResponse } from '@services/mappers';
import { notification } from 'antd';

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
            const [exhausters, moment] = (mapSinterMachinesResponse(res));
            const delay = ((nowGMT - new Date(moment).valueOf()) / 1000).toFixed(2)
            dispatch(setSinterMachines([
                exhausters,
                new Date(new Date(moment).valueOf() - (now.getTimezoneOffset() * 60000)).toLocaleString('ru'),
                Number(delay)]));
        },
    );
}

export function notif(
    stompClient: any,
    dispatch: any,
) {
    stompClient.subscribe(
        '/user/1/queue/notifications',
        (msg: any) => {
            notification.info({ message: 'Новое уведомление в журнале' })
        },
    );
}

export default null
