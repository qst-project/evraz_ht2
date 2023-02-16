import { setData } from '@reduxToolkit/slices/exhauster';
// import { Dispatch } from 'react';
// import { AnyAction } from 'redux';

export function subscribe(
    stompClient: any,
    dispatch: any,
) {
    stompClient.subscribe(
        '/user/1/queue/messages',
        (msg: any) => {
            const notification = JSON.parse(msg.body);
            console.log(notification)
            dispatch(setData(notification?.temp))
        },
    );
}

export default null
