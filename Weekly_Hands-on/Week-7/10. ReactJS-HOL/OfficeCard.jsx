import React from "react";

const OfficeCard = ({ office }) => {
  // Inline style for rent: red if < 60000, green otherwise
  const rentStyle = {
    color: office.rent < 60000 ? "red" : "green",
    fontWeight: "bold",
  };

  const containerStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    marginBottom: "16px",
    display: "flex",
    gap: "12px",
    alignItems: "flex-start",
    background: "#f9f9f9",
  };

  const imageStyle = {
    width: "150px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "4px",
  };

  return (
    <div style={containerStyle}>
      <div>
        <img
          src={office.image}
          alt={office.name}
          style={imageStyle}
        />
      </div>
      <div>
        <h2>{office.name}</h2>
        <p>
          <span style={rentStyle}>Rent: ₹{office.rent.toLocaleString()}</span>
        </p>
        <p>Address: {office.address}</p>
      </div>
    </div>
  );
};

export default OfficeCard;
