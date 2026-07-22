import React from 'react';

const GuestPage = () => {
  const flightDetails = [
    { flightNo: 'AI-101', origin: 'Delhi', destination: 'Mumbai', departure: '08:00 AM', price: 'Rs. 4500' },
    { flightNo: '6E-202', origin: 'Bangalore', destination: 'Chennai', departure: '10:30 AM', price: 'Rs. 3200' },
    { flightNo: 'SG-303', origin: 'Kolkata', destination: 'Hyderabad', departure: '02:15 PM', price: 'Rs. 5100' }
  ];

  return (
    <div>
      <h2>Flight Details (Guest View)</h2>
      <p>You are viewing as a <strong>Guest</strong>. Please log in to book flight tickets.</p>

      <ul>
        {flightDetails.map((flight, index) => (
          <li key={index}>
            Flight: {flight.flightNo} | {flight.origin} to {flight.destination} | Departure: {flight.departure} | Price: {flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GuestPage;
