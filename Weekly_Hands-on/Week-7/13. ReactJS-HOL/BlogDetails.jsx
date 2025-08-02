import React from "react";

const BlogDetails = ({ blogs, visible }) => {
  if (!visible) return null;

  return (
    <div style={{ border: "1px solid #2196f3", padding: "12px", marginBottom: "16px" }}>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author} ({blog.date})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
