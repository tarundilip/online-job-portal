import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import WelcomePage from './WelcomePage';
import CandidateInterface from './CandidateInterface';
import EmployerInterface from './EmployerInterface';
import JobsData from './JobsData';
import Navbar from './Navbar';

function App() {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(localStorage.getItem('role') || 'choose');
  const [postedJobs, setPostedJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState({});
  const [jobApplications, setJobApplications] = useState([]);

  useEffect(() => {
    if (role === 'candidate') {
      setAppliedJobs(
        JobsData.reduce((acc, job) => ({ ...acc, [job.id]: false }), {})
      );
    }
  }, [role]);

  const handleLogin = (user, role) => {
    setUser(user);
    setRole(role);
    localStorage.setItem('role', role);
  };

  const handleLogout = () => {
    setUser(null);
    setRole('choose');
    localStorage.removeItem('role');
  };

  const handleJobApply = (job) => {
    setAppliedJobs((prev) => ({ ...prev, [job.id]: true }));
    setJobApplications((prev) => [...prev, job]);
  };

  const handleAddJob = (job) => {
    setPostedJobs((prev) => [...prev, job]);
  };

  return (
    <div className="app">
      {user && role !== 'choose' && <Navbar role={role} handleLogout={handleLogout} />}

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/candidateInterface"
          element={
            role === 'candidate' ? (
              <CandidateInterface appliedJobs={appliedJobs} onJobApply={handleJobApply} />
            ) : (
              <div>Please log in as a candidate / an employer.</div>
            )
          }
        />

        <Route
          path="/employerInterface"
          element={
            role === 'employer' ? (
              <EmployerInterface
                postedJobs={postedJobs}
                jobApplications={jobApplications}
                onAddJob={handleAddJob}
              />
            ) : (
              <div>Please log in as a candidate / an employer.</div>
            )
          }
        />
      </Routes>
    </div>
  );
}

export default App;
