import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import '@scss/index.scss';
import App from '@components/App';
import { setupStore } from './reduxToolkit';

const store = setupStore();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
