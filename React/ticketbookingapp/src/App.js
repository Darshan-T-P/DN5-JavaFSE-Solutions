import React, { useState } from 'react';
import GuestPage from './Components/GuestPage';
import UserPage from './Components/UserPage';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // Conditional Rendering using Element Variables
  let pageElement;
  let buttonElement;

  if (isLoggedIn) {
    pageElement = <UserPage />;
    buttonElement = <button onClick={handleLogout}>Logout</button>;
  } else {
    pageElement = <GuestPage />;
    buttonElement = <button onClick={handleLogin}>Login</button>;
  }

  return (
    <div className="App">
      <h1>Flight Ticket Booking App</h1>
      <div style={{ marginBottom: '20px' }}>
        {buttonElement}
      </div>
      {pageElement}
    </div>
  );
}

export default App;
