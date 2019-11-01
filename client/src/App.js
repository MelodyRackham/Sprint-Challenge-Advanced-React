import React from 'react';
import './App.css';
import Player from './components/PlayerCard';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='App'>
      <header className='Header'>
        <h1> Women's World Cup </h1>
        <NavBar />
        <div className='container'>
          <Player />
        </div>
      </header>
    </div>
  );
}
export default App;
