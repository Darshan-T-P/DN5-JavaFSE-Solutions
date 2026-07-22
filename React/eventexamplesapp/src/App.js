import React from 'react';
import Counter from './Components/Counter';
import CurrencyConvertor from './Components/CurrencyConvertor';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Event Examples Application</h1>
      <Counter />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
