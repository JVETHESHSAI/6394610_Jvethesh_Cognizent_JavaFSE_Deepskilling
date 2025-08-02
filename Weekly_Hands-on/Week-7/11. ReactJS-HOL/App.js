import React from "react";
import Counter from "./components/Counter";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Event Examples App</h1>
      <Counter />
      <CurrencyConverter />
    </div>
  );
}

export default App;
