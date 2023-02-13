import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';

const MainPage = lazy(() => import('@pages/MainPage'))
const ExhausterPage = lazy(() => import('@pages/ExhausterPage'))

function App() {
  return (
    <div className="app">
      <Header/>
      <BrowserRouter>
        <Suspense fallback={<Spin />}>
          <Routes>
            <Route
              path='main'
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
          </Routes>
        </Suspense>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
