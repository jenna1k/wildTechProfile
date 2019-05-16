import React from 'react';
import './App.css';
import Home from './Home';
import CardDeck from './Component/CardGallery/CardDeck';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <CardDeck/>
      <Footer/>
    </div>
  );
}

export default App;
