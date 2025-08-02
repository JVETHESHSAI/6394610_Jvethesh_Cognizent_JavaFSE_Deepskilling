import React from "react";

const CourseDetails = ({ courses, visible }) => {
  if (!visible) return null;

  return (
    <div style={{ border: "1px solid #ff9800", padding: "12px", marginBottom: "16px" }}>
      <h2>Course Details</h2>
      <ul>
        {courses.map((c) => (
          <li key={c.code}>
            <strong>{c.name}</strong> ({c.code}) - Duration: {c.duration} weeks
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
