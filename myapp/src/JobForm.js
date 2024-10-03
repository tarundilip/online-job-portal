import React, { useState } from 'react';

function JobForm({ onAddJob }) {
  const [job, setJob] = useState({
    title: '',
    description: '',
    salary: '',
    type: 'Choose',
    mode: 'Choose',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (job.title && job.description && job.salary && job.type !== 'Choose' && job.mode !== 'Choose') {
      onAddJob(job);  
      setJob({
        title: '',
        description: '',
        salary: '',
        type: 'Choose',
        mode: 'Choose',
      });
      alert('Job has been added to the My Jobs section.');
    } else {
      alert('Please fill in all fields and select options from dropdowns.');
    }
  };

  return (
    <div className="form-container">
      <h2>Add Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Job Title</label>
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={job.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Salary</label>
          <input
            type="number"
            name="salary"
            value={job.salary}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select name="type" value={job.type} onChange={handleChange}>
            <option value="Choose">Choose</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
          </select>
        </div>
        <div className="form-group">
          <label>Mode</label>
          <select name="mode" value={job.mode} onChange={handleChange}>
            <option value="Choose">Choose</option>
            <option value="In-office">In-office</option>
            <option value="Work-from-home">Work-from-home</option>
          </select>
        </div>
        <button type="submit">Add Job</button>
      </form>
    </div>
  );
}

export default JobForm;
