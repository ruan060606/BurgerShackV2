import React, { Component } from 'react';
import Header from './pages/Header';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Contact from './pages/Contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Menu/>
        <Location/>
        <Contact/>
      </div>
    );
  }
}

export default App;
