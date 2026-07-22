import React from 'react';

const ListofPlayers = () => {
  // Array of 11 players with names and scores
  const players = [
    { name: 'Jack', score: 50 },
    { name: 'Steve', score: 70 },
    { name: 'John', score: 40 },
    { name: 'Rahul', score: 85 },
    { name: 'Virat', score: 95 },
    { name: 'Rohit', score: 60 },
    { name: 'Dhoni', score: 75 },
    { name: 'Hardik', score: 45 },
    { name: 'Bumrah', score: 30 },
    { name: 'Shami', score: 68 },
    { name: 'Jadeja', score: 90 }
  ];

  // Filter players with score <= 70 using ES6 arrow function
  const playersBelow70 = players.filter((player) => player.score <= 70);

  return (
    <div>
      <h2>List of Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
      <hr />
      <h2>List of Players having score &lt;= 70</h2>
      <ul>
        {playersBelow70.map((player, index) => (
          <li key={index}>
            Mr. {player.name} {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
