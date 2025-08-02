import React, { useState } from "react";
import ListOfPlayers from "./components/ListOfPlayers";
import IndianPlayers from "./components/IndianPlayers";

function App() {
  // Flag to toggle display
  const [flag, setFlag] = useState(true);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <h1>Cricket App</h1>
      <button
        onClick={() => setFlag((f) => !f)}
        style={{ padding: "8px 16px", borderRadius: "6px", cursor: "pointer", marginBottom: "16px" }}
      >
        Toggle Flag (currently {flag.toString()})
      </button>

      {flag ? (
        <>
          <ListOfPlayers flag={flag} />
          <IndianPlayers />
        </>
      ) : (
        <>
          <IndianPlayers />
          <ListOfPlayers flag={flag} />
        </>
      )}
    </div>
  );
}

export default App;
