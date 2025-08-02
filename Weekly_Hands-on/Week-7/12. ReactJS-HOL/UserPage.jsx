import React from "react";

const UserPage = () => {
  const flights = [
    { id: 1, airline: "Air India", from: "Delhi", to: "Mumbai", price: 5000 },
    { id: 2, airline: "IndiGo", from: "Chennai", to: "Bangalore", price: 3000 },
    { id: 3, airline: "SpiceJet", from: "Kolkata", to: "Hyderabad", price: 4500 },
  ];

  const handleBook = (flight) => {
    alert(`Ticket booked for ${flight.airline} (${flight.from} → ${flight.to})`);
  };

  return (
    <div>
      <h2>Book Your Flight</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.airline} - {flight.from} to {flight.to} - ₹{flight.price}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleBook(flight)}
            >
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPage;
