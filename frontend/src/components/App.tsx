import React, { Suspense } from 'react';
import { ConfigProvider, Spin } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import useWebSocket from '@hooks/useWebSocket';
import { subscribe } from '@services/subscriptions';
import { Colors } from '@services/constants';

import MainPage from '@pages/MainPage';
import ExhausterPage from '@pages/ExhausterPage';
import TrendsPage from '@pages/TrendsPage';
import NotificationsPage from '@pages/NotificationsPage';
import PageLayout from './layout/PageLayout';

function App() {
    useWebSocket(subscribe, [])
    return (
        <div className='app'>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: Colors.PRIMARY,
                    },
                }}
            >
                <BrowserRouter>
                    <Suspense fallback={<Spin />}>
                        <PageLayout>
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
                                <Route
                                    path='notifications'
                                    element={
                                        <NotificationsPage />
                                    }
                                />
                            </Routes>
                        </PageLayout>
                    </Suspense>
                </BrowserRouter>
            </ConfigProvider>
        </div>
    );
}

export default App;
