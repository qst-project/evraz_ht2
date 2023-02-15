export function subscribe(stompClient: any) {
    stompClient.subscribe(
        '/user/1/queue/messages',
        (msg: any) => console.log(msg),
    );
}

export default null
