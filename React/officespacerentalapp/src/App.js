import React from 'react';
import './App.css';

function App() {
  // 1. Heading element using JSX
  const headingElement = <h1>Office Space , at Affordable Range</h1>;

  // 3. Object of office
  const singleOffice = {
    Name: 'DBS',
    Rent: 50000,
    Address: 'Chennai'
  };

  // 4. List of Office Objects
  const offices = [
    { Name: 'DBS', Rent: 50000, Address: 'Chennai' },
    { Name: 'FastTrack', Rent: 70000, Address: 'Bangalore' },
    { Name: 'FlexiSpace', Rent: 55000, Address: 'Hyderabad' },
    { Name: 'PrimeOffice', Rent: 80000, Address: 'Mumbai' }
  ];

  return (
    <div className="App">
      {/* 1. JSX Heading Element */}
      <div>{headingElement}</div>

      {/* 2. Attributes in JSX to display image of office space */}
      <img
        src={process.env.PUBLIC_URL + '/office.jpg'}
        alt="Office Space"
        width="250"
        height="150"
      />

      {/* 3. Single Office Details */}
      <div>
        <h2>Name: {singleOffice.Name}</h2>
        <h3 style={{ color: singleOffice.Rent <= 60000 ? 'red' : 'green' }}>
          Rent: Rs. {singleOffice.Rent}
        </h3>
        <h3>Address: {singleOffice.Address}</h3>
      </div>

      <hr />

      {/* 4 & 5. Loop through office items and apply conditional inline CSS for Rent color */}
      <h2>Office Spaces List</h2>
      {offices.map((office, index) => (
        <div key={index}>
          <h2>Name: {office.Name}</h2>
          <h3 style={{ color: office.Rent <= 60000 ? 'red' : 'green' }}>
            Rent: Rs. {office.Rent}
          </h3>
          <h3>Address: {office.Address}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
