import React from 'react';

const CalculateScore = ({ Name, School, Total, goal }) => {
  const average = goal > 0 ? ((Total / goal) * 100).toFixed(2) : 0;

  return (
    <div>
      <div style={{ border: '2px solid #61dafb', padding: '20px', borderRadius: '10px', margin: '20px', backgroundColor: '#282c34', color: 'white' }}>
        <h2>Student Score Details</h2>
        <p><strong>Name:</strong> {Name}</p>
        <p><strong>School:</strong> {School}</p>
        <p><strong>Total Marks:</strong> {Total}</p>
        <p><strong>Goal Marks:</strong> {goal}</p>
        <hr />
        <h3 style={{ color: '#61dafb' }}>Average Score: {average}%</h3>
      </div>
    </div>
  );
};

export default CalculateScore;
