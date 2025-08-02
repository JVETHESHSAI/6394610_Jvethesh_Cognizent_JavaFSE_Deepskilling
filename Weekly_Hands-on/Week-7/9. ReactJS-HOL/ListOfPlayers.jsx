import React from "react";

const ListOfPlayers = ({ flag }) => {
  // Declare 11 players with names and scores
  const players = [
    { name: "Virat Kohli", score: 85 },
    { name: "Rohit Sharma", score: 67 },
    { name: "KL Rahul", score: 72 },
    { name: "Hardik Pandya", score: 55 },
    { name: "Jasprit Bumrah", score: 90 },
    { name: "Ravindra Jadeja", score: 68 },
    { name: "Shubman Gill", score: 45 },
    { name: "Suryakumar Yadav", score: 77 },
    { name: "Yuzvendra Chahal", score: 33 },
    { name: "Cheteshwar Pujara", score: 80 },
    { name: "Ishan Kishan", score: 62 },
  ];

  // Use map to prepare display elements
  const playerList = players.map((p, idx) => (
    <li key={idx}>
      {p.name} - Score: {p.score}
    </li>
  ));

  // Filter players with scores below 70 using ES6 arrow function
  const belowSeventy = players
    .filter((p) => p.score < 70)
    .map((p, idx) => (
      <li key={idx}>
        {p.name} - {p.score}
      </li>
    ));

  return (
    <div style={{ border: "1px solid #444", padding: "12px", borderRadius: "8px", marginBottom: "16px" }}>
      <h2>List of Players (Flag is {flag.toString()})</h2>
      <h3>All Players:</h3>
      <ul>{playerList}</ul>
      <h3>Players with score below 70:</h3>
      <ul>{belowSeventy}</ul>
    </div>
  );
};

export default ListOfPlayers;
