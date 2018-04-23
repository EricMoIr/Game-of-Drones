import './index.css';
import logo from '../../images/logo.png';
import React from 'react';
import Game from '../screens/Game'

const App = () => {
  return (
    <div className="App container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Game of Drones</h1>
      </header>
      <Game currentScreen="NEW_GAME"/>
    </div>
  );
};
export default App;