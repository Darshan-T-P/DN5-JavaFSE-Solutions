import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [inr, setInr] = useState('');
  const [euro, setEuro] = useState(null);

  // Exchange rate: 1 Euro = 90 INR
  const conversionRate = 90;

  const handleSubmit = (event) => {
    event.preventDefault();
    const rupees = parseFloat(inr);
    if (!isNaN(rupees) && rupees >= 0) {
      const convertedEuro = (rupees / conversionRate).toFixed(2);
      setEuro(convertedEuro);
    } else {
      setEuro('Please enter a valid amount');
    }
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount in INR: </label>
        <input
          type="number"
          value={inr}
          onChange={(e) => setInr(e.target.value)}
          placeholder="Enter Amount"
          required
        />
        <button type="submit">Convert</button>
      </form>

      {euro !== null && (
        <p>
          {isNaN(euro) ? euro : `Euro: ${euro}`}
        </p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
