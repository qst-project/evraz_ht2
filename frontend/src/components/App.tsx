import React, { lazy, Suspense } from 'react';
import { ConfigProvider, Spin } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import useWebSocket from '@hooks/useWebSocket';
import { subscribe } from '@services/subscriptions';
import { Colors } from '@services/constants';

const MainPage = lazy(() => import('@pages/MainPage'));
const ExhausterPage = lazy(() => import('@pages/ExhausterPage'));
const TrendsPage = lazy(() => import('@pages/TrendsPage'));

function App() {
    useWebSocket(subscribe, [])
    return (
        <div className='app'>
<<<<<<< HEAD
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
                            path='exhauster'
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
=======
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: Colors.PRIMARY,
                    },
                }}
            >
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
            </ConfigProvider>
>>>>>>> 2d9258d6e9f660080b8d4df3a74b97568033afca
        </div>
    );
}

export default App;
