import React from 'react';
import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content container">
        Hello world!
      </div>
      <Footer />
    </div>
  );
}

export default App;
