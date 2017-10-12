import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Senators from './components/Senators';

class App extends Component {
  render() {
    return (
    <MuiThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Elephants and Jackasses</h1>
        </header>
        <div>
          <Senators />
          </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
