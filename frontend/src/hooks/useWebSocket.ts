import { notification } from 'antd'
import { useCallback, useEffect } from 'react'

const Stomp = require('stompjs')
const SockJS = require('sockjs-client')

function useWebSocket(onConnected: Function, deps: Array<any>) {
    const sockJS = new SockJS('http://0.0.0.0:9090/ws')
    const stompClient = Stomp.over(sockJS)

    const subscribe = useCallback(() => {
        stompClient.connect(
            {},
            onConnected.bind(null, stompClient),
            (error: any) => notification.error(
                {
                    message: 'Ошибка',
                    description: error,
                },
            ),
        )
    }, [onConnected, stompClient])

    useEffect(() => {
        subscribe()
    }, [deps, onConnected, subscribe])
}

export default useWebSocket
