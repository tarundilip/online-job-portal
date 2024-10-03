import React from 'react';
import './App.css';

function CandidateApplications({ applications }) {
  return (
    <div className="application-container">
      <h2>My Applications</h2>
      {applications.length === 0 ? (
        <p>No applications have been applied.</p>
      ) : (
        applications.map((job, index) => (
          <div key={index} className="application-card">
            <h3>Job Title: {job.title}</h3>
            <p>Description: {job.description}</p>
            <p>Status: Applied</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CandidateApplications;
