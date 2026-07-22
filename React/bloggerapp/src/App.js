import React, { useState } from 'react';
import BookDetails from './Components/BookDetails';
import BlogDetails from './Components/BlogDetails';
import CourseDetails from './Components/CourseDetails';
import './App.css';

function App() {
  const [selectedView, setSelectedView] = useState('books');
  const [showAll, setShowAll] = useState(false);

  // Method 1: Conditional Rendering using Switch-Case Statement
  const renderContentWithSwitch = () => {
    switch (selectedView) {
      case 'books':
        return <BookDetails />;
      case 'blogs':
        return <BlogDetails />;
      case 'courses':
        return <CourseDetails />;
      default:
        return <p>Select a category to view details.</p>;
    }
  };

  // Method 2: Conditional Rendering using Element Variables and If-Else
  let elementView;
  if (selectedView === 'books') {
    elementView = <BookDetails />;
  } else if (selectedView === 'blogs') {
    elementView = <BlogDetails />;
  } else if (selectedView === 'courses') {
    elementView = <CourseDetails />;
  } else {
    elementView = <p>No view selected.</p>;
  }

  return (
    <div className="App">
      <h1>Blogger App</h1>

      <div style={{ marginBottom: '15px' }}>
        <button onClick={() => { setSelectedView('books'); setShowAll(false); }}>Book Details</button>
        <button onClick={() => { setSelectedView('blogs'); setShowAll(false); }}>Blog Details</button>
        <button onClick={() => { setSelectedView('courses'); setShowAll(false); }}>Course Details</button>
        <button onClick={() => setShowAll(!showAll)}>
          {/* Method 3: Conditional Rendering using Ternary Operator */}
          {showAll ? 'Hide All Details' : 'Show All Details'}
        </button>
      </div>

      <hr />

      {/* Method 4: Conditional Rendering using Logical && Operator */}
      {showAll && (
        <div>
          <h3>Showing All Sections (Logical &amp;&amp; Operator):</h3>
          <BookDetails />
          <BlogDetails />
          <CourseDetails />
        </div>
      )}

      {/* Rendering view using Element Variable & Switch-Case when not showAll */}
      {!showAll && (
        <div>
          <h3>Active Section (Element Variable &amp; Switch-Case):</h3>
          {elementView}
          {/* Switch-Case demonstration comment/execution */}
          {false && renderContentWithSwitch()}
        </div>
      )}
    </div>
  );
}

export default App;
