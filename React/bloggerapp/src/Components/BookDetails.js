import React from 'react';

const BookDetails = () => {
  const books = [
    { id: 101, title: 'Mastering React', author: 'John Doe', price: 499 },
    { id: 102, title: 'JavaScript ES6 Complete Guide', author: 'Jane Smith', price: 599 },
    { id: 103, title: 'Node.js in Action', author: 'Robert Brown', price: 699 }
  ];

  return (
    <div>
      <h2>Book Details</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} - Price: Rs. {book.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookDetails;
