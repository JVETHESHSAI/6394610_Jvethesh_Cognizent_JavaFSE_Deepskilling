import React from "react";

const BookDetails = ({ books, visible }) => {
  // Prevent rendering if not visible
  if (!visible) return null;

  return (
    <div style={{ border: "1px solid #4caf50", padding: "12px", marginBottom: "16px" }}>
      <h2>Book Details</h2>
      <ul>
        {books.map((b) => (
          <li key={b.isbn}>
            <strong>{b.title}</strong> by {b.author} - ₹{b.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
