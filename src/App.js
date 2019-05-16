import React from 'react';
import './App.css';
import Home from './Home';
import CardDeck from './Component/CardGallery/CardDeck';
import Header from './Component/Header/Header';

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <CardDeck />
    </div>
  );
}

export default App;
