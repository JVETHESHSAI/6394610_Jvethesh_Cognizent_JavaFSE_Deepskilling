import React from "react";

const IndianPlayers = () => {
  // Sample two teams: odd index and even index players
  const team = [
    "Rohit Sharma",
    "Virat Kohli",
    "Rishabh Pant",
    "KL Rahul",
    "Hardik Pandya",
    "Jasprit Bumrah",
    "Ravindra Jadeja",
    "Shubman Gill",
    "Suryakumar Yadav",
    "Mohammed Shami",
    "Ishan Kishan",
  ];

  // Destructure into odd and even team players using ES6 destructuring
  const evenTeam = team.filter((_, idx) => idx % 2 === 0); // 0,2,4...
  const oddTeam = team.filter((_, idx) => idx % 2 !== 0); // 1,3,5...

  // Declare two arrays and merge using spread operator
  const T20players = ["Virat Kohli", "Rohit Sharma", "Hardik Pandya"];
  const RanjiTrophy = ["Player A", "Player B", "Player C"];
  const merged = [...T20players, ...RanjiTrophy];

  return (
    <div style={{ border: "1px solid #0066cc", padding: "12px", borderRadius: "8px" }}>
      <h2>Indian Players Component</h2>
      <div>
        <h3>Even Team Players:</h3>
        <ul>
          {evenTeam.map((p, i) => (
            <li key={`even-${i}`}>{p}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Odd Team Players:</h3>
        <ul>
          {oddTeam.map((p, i) => (
            <li key={`odd-${i}`}>{p}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>Merged Players (T20 + Ranji):</h3>
        <ul>
          {merged.map((p, i) => (
            <li key={`merged-${i}`}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default IndianPlayers;
