import React, { useState } from 'react';

const UserPage = () => {
  const [selectedFlight, setSelectedFlight] = useState('');
  const [passengers, setPassengers] = useState(1);
  const [bookingMessage, setBookingMessage] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedFlight) {
      setBookingMessage(`Successfully booked ${passengers} ticket(s) for ${selectedFlight}!`);
    } else {
      setBookingMessage('Please select a flight to book.');
    }
  };

  return (
    <div>
      <h2>User Page (Ticket Booking)</h2>
      <p>Welcome, User! You are logged in and authorized to book tickets.</p>

      <form onSubmit={handleBooking}>
        <div style={{ marginBottom: '10px' }}>
          <label>Select Flight: </label>
          <select value={selectedFlight} onChange={(e) => setSelectedFlight(e.target.value)} required>
            <option value="">-- Select Flight --</option>
            <option value="AI-101">AI-101 (Delhi to Mumbai)</option>
            <option value="6E-202">6E-202 (Bangalore to Chennai)</option>
            <option value="SG-303">SG-303 (Kolkata to Hyderabad)</option>
          </select>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <label>No. of Passengers: </label>
          <input
            type="number"
            min="1"
            max="10"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
          />
        </div>

        <button type="submit">Book Tickets</button>
      </form>

      {bookingMessage && <p style={{ color: 'green' }}>{bookingMessage}</p>}
    </div>
  );
};

export default UserPage;
