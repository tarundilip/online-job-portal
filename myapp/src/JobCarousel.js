import React from 'react';
import './App.css';
import jobs from './JobsData';

function JobCarousel({ onApply, onCancel, appliedJobs }) {
  return (
    <div className="carousel-container">
      <h2>Job Openings</h2>
      <div className="job-carousel">
        {jobs.map(job => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p>{job.description}</p>
            <p>Salary: {job.salary}</p>
            <p>Type: {job.type}</p>
            <p>Mode: {job.mode}</p>
            <button
              onClick={() => onApply(job)}
              disabled={!!appliedJobs[job.id]}
            >
              {appliedJobs[job.id] ? 'Applied' : 'Apply'}
            </button>
            {appliedJobs[job.id] && (
              <button
                onClick={() => onCancel(job.id)}
                style={{ marginLeft: '10px', backgroundColor: 'red', color: 'white' }}
              >
                Cancel
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobCarousel;
