import React, { useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';
import { CompatClient, Stomp } from '@stomp/stompjs';

function TestComponent() {
  const client = useRef<CompatClient>();

  useEffect(() => {
    const url = 'http://localhost:9090/test-endpoint';
    const socket = new SockJS(url);
    const stompClient = Stomp.over(socket);
    stompClient.connect({}, () => {
      stompClient.subscribe('/hello', function (res) {
        console.log(res);
      });
    });
    client.current = stompClient;
  }, []);

  const send = () => {
    if (!client.current) {
      return;
    }
    client.current.publish({ destination: '/hello', body: 'TEST' });
    console.log('send')
  }

  return (
    <div className="">
      <button onClick={send}>Send</button>
    </div>
  );
}

export default TestComponent;
