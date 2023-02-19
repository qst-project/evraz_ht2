import { notification } from 'antd'
import { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSinterMachines, setWebSockerConnectionError } from '@reduxToolkit/slices/sinterMachines';
import { mapSinterMachinesResponse } from '@services/mappers';

const Stomp = require('stompjs')
const SockJS = require('sockjs-client')

function useWebSocket(onConnected: Function, deps: Array<any>) {
    const sockJS = new SockJS('http://localhost:9090/ws')
    const stompClient = Stomp.over(sockJS)

    const dispatch = useDispatch()

    const subscribe = useCallback(() => {
        stompClient.connect(
            {},
            onConnected.bind(null, stompClient, dispatch),
            (error: any) => {
                dispatch(setWebSockerConnectionError(true))
                notification.error(
                    {
                        message: 'Ошибка',
                        description: error,
                    },
                )
            },
        )
    }, [onConnected, stompClient, dispatch])

    const fetchLastData = useCallback(async () => {
        await fetch('http://localhost:9090/sin_machines')
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                dispatch(setWebSockerConnectionError(false))
                const now = new Date();
                const nowGMT = now.valueOf() + (now.getTimezoneOffset() * 60000)
                const [exhausters, moment] = (mapSinterMachinesResponse(data));
                const delay = ((nowGMT - new Date(moment).valueOf()) / 1000).toFixed(2)
                dispatch(setSinterMachines([
                    exhausters,
                    new Date(new Date(moment).valueOf() - (now.getTimezoneOffset() * 60000)).toLocaleString('ru'),
                    Number(delay)]));
            });
    }, [])

    const fetchPredictionData = useCallback(async () => {
        const socket = new WebSocket('ws://0.0.0.0:8765/');

        socket.onopen = function () {
            console.log('[open] Соединение установлено');
           socket.send('Меня зовут skinny')
        };

        socket.onmessage = function (event) {
           const prediction = JSON.parse(event.data);
        };

    }, [])

    useEffect(() => {
        subscribe()
        fetchLastData()
        fetchPredictionData()
    }, [deps, onConnected, subscribe, fetchLastData, fetchPredictionData])
}

export default useWebSocket
