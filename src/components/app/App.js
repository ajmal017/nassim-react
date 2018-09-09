import React, { Component } from 'react';
import './App.css';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Main from '../main/Main';
import dotenv from 'dotenv';
dotenv.config();

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;