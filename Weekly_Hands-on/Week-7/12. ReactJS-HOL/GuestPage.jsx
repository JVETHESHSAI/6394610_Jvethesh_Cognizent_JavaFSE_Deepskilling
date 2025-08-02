import React from "react";

const GuestPage = () => {
  const flights = [
    { id: 1, airline: "Air India", from: "Delhi", to: "Mumbai", price: 5000 },
    { id: 2, airline: "IndiGo", from: "Chennai", to: "Bangalore", price: 3000 },
    { id: 3, airline: "SpiceJet", from: "Kolkata", to: "Hyderabad", price: 4500 },
  ];

  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.airline} - {flight.from} to {flight.to} - ₹{flight.price}
          </li>
        ))}
      </ul>
      <p><em>Login to book tickets.</em></p>
    </div>
  );
};

export default GuestPage;
