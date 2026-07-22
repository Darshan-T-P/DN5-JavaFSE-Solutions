import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 301, name: 'Full Stack Java Development', instructor: 'Dr. Evans', duration: '12 Weeks' },
    { id: 302, name: 'React & Redux Certification', instructor: 'Prof. Miller', duration: '6 Weeks' },
    { id: 303, name: 'Cloud Architecture & Microservices', instructor: 'Tech Lead Dave', duration: '8 Weeks' }
  ];

  return (
    <div>
      <h2>Course Details</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <strong>{course.name}</strong> - Instructor: {course.instructor} ({course.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
