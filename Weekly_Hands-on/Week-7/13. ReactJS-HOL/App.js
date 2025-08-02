import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);
  const [mode, setMode] = useState("all"); // element variable / switch-style

  // Sample data
  const books = [
    { isbn: "978-0132350884", title: "Clean Code", author: "Robert C. Martin", price: 450 },
    { isbn: "978-1491950296", title: "Learning React", author: "Alex Banks", price: 320 },
  ];

  const blogs = [
    { id: 1, title: "Understanding React Hooks", author: "Jane Doe", date: "2025-07-01" },
    { id: 2, title: "State Management Patterns", author: "John Smith", date: "2025-06-20" },
  ];

  const courses = [
    { code: "REACT101", name: "React Basics", duration: 4 },
    { code: "JSADV", name: "Advanced JavaScript", duration: 6 },
  ];

  // Element variable approach: decide what to render based on mode
  let conditionalSection;
  if (mode === "books") {
    conditionalSection = <BookDetails books={books} visible={true} />;
  } else if (mode === "blogs") {
    conditionalSection = <BlogDetails blogs={blogs} visible={true} />;
  } else if (mode === "courses") {
    conditionalSection = <CourseDetails courses={courses} visible={true} />;
  } else {
    // mode === "all"
    conditionalSection = (
      <>
        <BookDetails books={books} visible={showBooks} />
        <BlogDetails blogs={blogs} visible={showBlogs} />
        <CourseDetails courses={courses} visible={showCourses} />
      </>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px", fontFamily: "Arial, sans-serif" }}>
      <h1>Blogger App</h1>

      {/* Controls for conditional rendering */}
      <div style={{ marginBottom: "20px" }}>
        <strong>Toggle Sections (logical AND / independent):</strong>
        <div>
          <label>
            <input type="checkbox" checked={showBooks} onChange={() => setShowBooks((v) => !v)} /> Show Books
          </label>
          <label style={{ marginLeft: "12px" }}>
            <input type="checkbox" checked={showBlogs} onChange={() => setShowBlogs((v) => !v)} /> Show Blogs
          </label>
          <label style={{ marginLeft: "12px" }}>
            <input type="checkbox" checked={showCourses} onChange={() => setShowCourses((v) => !v)} /> Show Courses
          </label>
        </div>

        <div style={{ marginTop: "12px" }}>
          <strong>Mode (element variable / switch-style):</strong>
          <select value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="all">All</option>
            <option value="books">Only Books</option>
            <option value="blogs">Only Blogs</option>
            <option value="courses">Only Courses</option>
          </select>
        </div>
      </div>

      {/* Conditional section decided above */}
      {conditionalSection}

      {/* Alternative inline ternary example */}
      <div style={{ marginTop: "30px", paddingTop: "16px", borderTop: "1px solid #ccc" }}>
        <h2>Inline Ternary Example</h2>
        {/* show a short summary using ternary */}
        {mode === "books" ? (
          <p>Currently viewing only book details.</p>
        ) : mode === "blogs" ? (
          <p>Currently viewing only blog details.</p>
        ) : mode === "courses" ? (
          <p>Currently viewing only course details.</p>
        ) : (
          <p>Viewing all sections together.</p>
        )}
      </div>
    </div>
  );
}

export default App;
