import React from 'react';
import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';
import MainPage from '@pages/MainPage';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content container">
        <MainPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
