import React, { useState } from "react";
import JobForm from "./JobForm";
import Profile from "./Profile";
//import CandidateApplications from "./CandidateApplications";
import JobApplications from "./JobApplications"; // Importing sample data
import "./App.css";

function EmployerInterface({ onAddJob, jobApplications: applicationsFromApp }) {
  const [view, setView] = useState("addJobs");
  const [jobs, setJobs] = useState([]);

  const generateUniqueId = () => {
    return Math.floor(Math.random() * 1000000).toString();
  };

  const handleJobAddition = (newJob) => {
    const newJobWithId = {
      ...newJob,
      id: generateUniqueId(),
    };
    setJobs((prev) => [...prev, newJobWithId]);
    onAddJob(newJobWithId);
  };

  const handleRemoveJob = (jobId) => {
    setJobs((prev) => prev.filter((job) => job.id !== jobId));
    alert("Job has been removed.");
  };

  return (
    <div className="employer-interface">
      <nav>
        <button onClick={() => setView("addJobs")}>Add Jobs</button>
        <button onClick={() => setView("myJobs")}>My Jobs</button>
        <button onClick={() => setView("employees")}>Employees</button>
        <button onClick={() => setView("profile")}>Profile</button>
      </nav>

      {view === "addJobs" && <JobForm onAddJob={handleJobAddition} />}

      {view === "myJobs" && (
        <div>
          {jobs.length === 0 ? (
            <p>No jobs posted yet.</p>
          ) : (
            jobs.map((job) => (
              <div key={job.id} className="job-details">
                <h3>{job.title}</h3>
                <p>{job.description}</p>
                <p>Salary: {job.salary}</p>
                <p>Type: {job.type}</p>
                <p>Mode: {job.mode}</p>
                <button onClick={() => handleRemoveJob(job.id)}>Remove Job</button>
              </div>
            ))
          )}
        </div>
      )}

      {view === "employees" && (
        <div>
          {JobApplications.length === 0 ? (
            <p>No applications received yet.</p>
          ) : (
            JobApplications.map((job) => (
              <div key={job.jobId} className="application-details">
                <h4>Job Title: {job.jobTitle}</h4>
                <ul>
                  {job.applicants.map((applicant, index) => (
                    <li key={index}>
                      <p>
                        <strong>Name:</strong> {applicant.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {applicant.email}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          )}
        </div>
      )}

      {view === "profile" && <Profile userType="employer" />}
    </div>
  );
}

export default EmployerInterface;
