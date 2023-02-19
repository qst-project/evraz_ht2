import React, { Suspense } from 'react';
import { Button, ConfigProvider, Result, Spin } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';

import useWebSocket from '@hooks/useWebSocket';
import { subscribe } from '@services/subscriptions';
import { Colors } from '@services/constants';
import { getWebConnectionError } from '@reduxToolkit/slices/sinterMachines';

import MainPage from '@pages/MainPage';
import ExhausterPage from '@pages/ExhausterPage';
import TrendsPage from '@pages/TrendsPage';
import NotificationsPage from '@pages/NotificationsPage';
import { RootState } from '@reduxToolkit/index';

import PageLayout from './layout/PageLayout';

function App() {
    useWebSocket(subscribe, [])
    const error = useSelector(
        ({
            sinter_machines,
        }: RootState) => getWebConnectionError(sinter_machines),
    )
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
                            {error ? (
                                <Result
                                    status='warning'
                                    title='Соединение с сервером прервано'
                                    extra={(
                                        <Button
                                            type='primary'
                                            key='console'
                                            // eslint-disable-next-line no-restricted-globals
                                            onClick={() => location.reload()}>
                                            Перезагрузить
                                        </Button>
                                    )}
                                />
                            ) : (
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
                            )
                            }

                        </PageLayout>
                    </Suspense>
                </BrowserRouter>
            </ConfigProvider>
        </div>
    );
}

export default App;
