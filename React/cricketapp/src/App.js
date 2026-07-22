import React from 'react';
import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers from './Components/IndianPlayers';
import './App.css';

function App() {
  const flag = true;

  if (flag) {
    return (
      <div className="App">
        <h1>Cricket App</h1>
        <ListofPlayers />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Cricket App</h1>
        <IndianPlayers />
      </div>
    );
  }
}

export default App;
