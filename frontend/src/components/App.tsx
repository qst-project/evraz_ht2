import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import useWebSocket from '@hooks/useWebSocket';
import { subscribe } from '@services/subscriptions';

const MainPage = lazy(() => import('@pages/MainPage'));
const ExhausterPage = lazy(() => import('@pages/ExhausterPage'));
const TrendsPage = lazy(() => import('@pages/TrendsPage'));

function App() {
    useWebSocket(subscribe, [])

    return (
        <div className='app'>
            <BrowserRouter>
                <Suspense fallback={<Spin />}>
                    <Routes>
                        <Route
                            path='/'
                            element={
                                <MainPage />
                            }
                        />
                        <Route
                            path='second'
                            element={
                                <ExhausterPage />
                            }
                        />
                        <Route
                            path='trends'
                            element={
                                <TrendsPage />
                            }
                        />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </div>
    );
}

export default App;
