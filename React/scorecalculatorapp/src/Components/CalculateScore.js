import React from 'react';

const CalculateScore = ({ Name, School, Total, goal }) => {
  const average = goal > 0 ? ((Total / goal) * 100).toFixed(2) : 0;

  return (
    <div>
      <h2>Student Score Details</h2>
      <p>Name: {Name}</p>
      <p>School: {School}</p>
      <p>Total Marks: {Total}</p>
      <p>Goal Marks: {goal}</p>
      <hr />
      <h3>Average Score: {average}%</h3>
    </div>
  );
};

export default CalculateScore;
