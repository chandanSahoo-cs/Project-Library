import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Header />
      <Home/>
      <About/>
      <Footer />
    </>
  );
}

export default App;
