import React, { useState } from 'react';
import JobCarousel from './JobCarousel';
import CandidateApplications from './CandidateApplications';
import Profile from './Profile';
import './App.css';

function CandidateInterface() {
  const [appliedJobs, setAppliedJobs] = useState({}); 
  const [view, setView] = useState('jobs'); 

  const handleApply = (job) => {
    if (!appliedJobs[job.id]) {
      setAppliedJobs(prevState => {
        const updatedJobs = {
          ...prevState,
          [job.id]: job 
        };
        console.log('Applied Jobs:', updatedJobs); 
        return updatedJobs;
      });
    }
  };

  const handleCancel = (jobId) => {
    setAppliedJobs(prevState => {
      const updatedJobs = { ...prevState };
      delete updatedJobs[jobId];
      console.log('Updated Applied Jobs After Cancel:', updatedJobs);
      return updatedJobs;
    });
  };

  const handleClear = () => {
    setAppliedJobs({});
    console.log('All jobs cleared');
  };

  return (
    <div className="candidate-interface">
      <nav>
        <button onClick={() => setView('jobs')}>Jobs</button>
        <button onClick={() => setView('applications')}>Applications</button>
        <button onClick={() => setView('profile')}>Profile</button>
      </nav>

      {view === 'jobs' && (
        <JobCarousel
          onApply={handleApply}
          appliedJobs={appliedJobs}
          onCancel={handleCancel} 
        />
      )}

      {view === 'applications' && (
        <CandidateApplications
          applications={Object.values(appliedJobs)}
          onCancel={handleCancel} 
          onClear={handleClear}   
        />
      )}

      {view === 'profile' && <Profile userType="candidate" />}
    </div>
  );
}

export default CandidateInterface;
