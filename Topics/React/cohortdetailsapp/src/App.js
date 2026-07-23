import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    {
      code: 'INTADM21DF002',
      name: 'Java Full Stack Engineer',
      technology: 'Java, Spring Boot, React',
      startDate: '10-May-2021',
      status: 'ongoing'
    },
    {
      code: 'INTADM21DF003',
      name: 'Cloud Native Developer',
      technology: 'AWS, Microservices',
      startDate: '15-Mar-2021',
      status: 'completed'
    },
    {
      code: 'INTADM21DF004',
      name: 'Data Engineering',
      technology: 'Python, Spark, SQL',
      startDate: '01-Jun-2021',
      status: 'ongoing'
    }
  ];

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>Cognizant Academy - Cohorts Dashboard</h2>
      <div>
        {cohorts.map((cohort, index) => (
          <CohortDetails key={index} cohort={cohort} />
        ))}
      </div>
    </div>
  );
}

export default App;
