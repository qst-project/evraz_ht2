// import { notification } from 'antd'

// const Stomp = require('stompjs')
// const SockJS = require('sockjs-client')

class WebSocketClient {
    host: string;

    // stompClient: any;

    constructor(host: string) {
        this.host = host
    }

    // getStompClient() {
    //     const sockjs = new SockJS(this.host)
    //     return Stomp.over(sockjs)
    // }

    // connect() {
    //     const stompClient = this.getStompClient()
    //     stompClient.connect(
    //         {},
    //         this.onConnected,
    //         (error: any) => notification.error(
    //             {
    //                 message: 'Ошибка',
    //                 description: error,
    //             },
    //         ),
    //     )
    // }

    // subscribe(url: string, onMessageReceivedCallback: Function) {
    //     this.stompClient.subscribe(
    //         url,
    //         onMessageReceivedCallback,
    //     );
    // }

    // onConnected(stompClient: any) {
    //     stompClient.subscribe(
    //         this.webSockerUrl,
    //         this.onMessageReceived,
    //     );
    // }

    // onMessageReceived(msg: any) {
    //     console.log(msg)
    // }
}

export default WebSocketClient
