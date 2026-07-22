import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 201, title: 'Understanding React State and Props', author: 'Alice White', category: 'Frontend' },
    { id: 202, title: 'Deep Dive into ES6 Arrow Functions', author: 'Bob Martin', category: 'JavaScript' },
    { id: 203, title: 'Building REST APIs with Express', author: 'Charlie Green', category: 'Backend' }
  ];

  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <strong>{blog.title}</strong> by {blog.author} [{blog.category}]
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;
