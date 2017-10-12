import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Senators from './components/Senators';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">The Elephants and Jackasses</h1>
        </header>
        <div>
          <Senators />
          </div>
      </div>
    );
  }
}

export default App;
