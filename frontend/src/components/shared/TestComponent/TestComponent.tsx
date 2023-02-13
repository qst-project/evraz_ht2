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
      stompClient.subscribe('/hello', (res) => {
        // eslint-disable-next-line no-console
        console.log(res);
      });
    });
    client.current = stompClient;
  }, []);

  const send = () => {
    if (!client.current) {
      return;
    }
    client.current.publish({ destination: '/app/hello', body: 'TEST' });
    // eslint-disable-next-line no-console
    console.log('send');
  };

  return (
    <div className="">
      <button type="button" onClick={send}>Send</button>
    </div>
  );
}

export default TestComponent;
