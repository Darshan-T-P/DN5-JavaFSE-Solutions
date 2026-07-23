import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [staticMessage, setStaticMessage] = useState('');

  // Method 1a: Increment counter value
  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Method 1b: Static hello message
  const sayHello = () => {
    setStaticMessage('Hello! Welcome to Event Handling Lab.');
  };

  // Invoking multiple methods on Increase button click
  const handleIncrease = () => {
    incrementCount();
    sayHello();
  };

  // Decrement counter method
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Requirement 2: Function taking "welcome" as an argument
  const sayWelcome = (message) => {
    alert(message);
    setStaticMessage(`Function invoked with argument: ${message}`);
  };

  // Requirement 3: Synthetic event handler
  const handlePress = (event) => {
    alert('I was clicked');
    setStaticMessage('I was clicked');
  };

  return (
    <div>
      <h2>Counter: {count}</h2>

      <div>
        <button onClick={handleIncrease}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
      </div>

      <div style={{ marginTop: '10px' }}>
        <button onClick={() => sayWelcome('welcome')}>Say Welcome</button>
        <button onClick={(e) => handlePress(e)}>OnPress</button>
      </div>

      {staticMessage && <p>{staticMessage}</p>}
    </div>
  );
};

export default Counter;
