import logo from './logo.png';
import './App.css';
import Hello from './components/Hello';
import React, { Component }  from 'react';
import QEEG from './components/QEEG';
import Sleep from './components/Sleep';
import DCS from './components/DCS';
import TMS from './components/TMS';
import Ques from './components/Question';
import bg from './bg.png';

function App() {

  const bgstyle = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    resizeMode: "stretch"
  }

  return (
      <div className="App" style={ bgstyle }>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              apps hub
            </p>
            <h1></h1>
            <div className="flexbox-container">
              <div><QEEG/></div>
              <div><Sleep/></div>
            </div>
            <div className="flexbox-container">
              <div><DCS/></div>
              <div><TMS/></div>
              <div><Ques/></div>
            </div>
          </header>
      </div>
  );
} 

export default App;
