import React from 'react';

const IndianPlayers = () => {
  // Indian Players Array
  const indianPlayers = ['Sachin', 'Dhoni', 'Virat', 'Rohit', 'Yuvraj', 'Raina'];

  // a. Using ES6 Array Destructuring to separate Odd and Even team players
  const [first, second, third, fourth, fifth, sixth] = indianPlayers;

  const oddTeam = [first, third, fifth];
  const evenTeam = [second, fourth, sixth];

  // b. Declare two arrays: T20players and RanjiTrophyplayers
  const T20players = ['First T20 Player', 'Second T20 Player', 'Third T20 Player'];
  const RanjiTrophyplayers = ['First Ranji Player', 'Second Ranji Player', 'Third Ranji Player'];

  // Merge the two arrays using ES6 Spread Operator (...)
  const mergedPlayers = [...T20players, ...RanjiTrophyplayers];

  return (
    <div>
      <h2>Indian Players</h2>
      <h3>Odd Team Players</h3>
      <ul>
        {oddTeam.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>

      <h3>Even Team Players</h3>
      <ul>
        {evenTeam.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>

      <hr />
      <h2>Merged Indian Players (T20 & Ranji Trophy)</h2>
      <ul>
        {mergedPlayers.map((player, index) => (
          <li key={index}>Mr. {player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
