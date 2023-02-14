import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';

const MainPage = lazy(() => import('@pages/MainPage'));
const ExhausterPage = lazy(() => import('@pages/ExhausterPage'));
const TrendsPage = lazy(() => import('@pages/TrendsPage'));

function App() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Suspense fallback={<Spin />}>
          <Routes>
            <Route
              path="/"
              element={
                <MainPage />
              }
            />
            <Route
              path="/second"
              element={
                <ExhausterPage />
              }
            />
            <Route
              path="/trends"
              element={
                <TrendsPage />
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
