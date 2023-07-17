import './App.css';
import React from 'react';
import Calculator from './components/calculator';
import FetchQuote from './components/ApiData';

const App = () => (
  <div className="container">
    <header className="title">
      <h1>Math-magicians</h1>
    </header>
    <FetchQuote />
    <Calculator />
  </div>
);

export default App;