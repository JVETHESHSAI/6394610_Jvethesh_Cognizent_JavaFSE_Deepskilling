import React, { useState } from "react";

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState("");
  const [euros, setEuros] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const euroValue = parseFloat(rupees) / 90; // example conversion rate
    setEuros(euroValue.toFixed(2));
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "16px" }}>
      <h2>Currency Converter (INR → Euro)</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Amount in INR:
          <input
            type="number"
            value={rupees}
            onChange={(e) => setRupees(e.target.value)}
            required
          />
        </label>
        <br /><br />
        <button type="submit">Convert</button>
      </form>
      {euros && (
        <p>
          Equivalent in Euros: <strong>€{euros}</strong>
        </p>
      )}
    </div>
  );
};

export default CurrencyConverter;
