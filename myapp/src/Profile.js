import React, { useState } from 'react';
import './App.css';

function Profile({ userType }) {
  const [profileData, setProfileData] = useState({
    name: '',
    age: '',
    qualifications: '',
    projects: '',
    previousJobs: '',
    experience: '',
    companyName: '',
    companyDetails: ''
  });
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Details stored and sent to Employer.');
    setIsEditing(false); 
  };

  return (
    <div className="profile-container">
      <h2>{userType === 'candidate' ? 'Candidate Profile' : 'Employer Profile'}</h2>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          {userType === 'candidate' && (
            <>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" value={profileData.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input type="number" name="age" value={profileData.age} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Qualifications</label>
                <input type="text" name="qualifications" value={profileData.qualifications} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Projects</label>
                <input type="text" name="projects" value={profileData.projects} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Previous Jobs</label>
                <input type="text" name="previousJobs" value={profileData.previousJobs} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Experience</label>
                <input type="text" name="experience" value={profileData.experience} onChange={handleChange} />
              </div>
            </>
          )}
          {userType === 'employer' && (
            <>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" name="companyName" value={profileData.companyName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Company Details</label>
                <input type="text" name="companyDetails" value={profileData.companyDetails} onChange={handleChange} />
              </div>
            </>
          )}
          <button type="submit" className="btn-submit">Save</button>
        </form>
      ) : (
        <div className="profile-details">
          {userType === 'candidate' && (
            <>
              <p><strong>Name:</strong> {profileData.name}</p>
              <p><strong>Age:</strong> {profileData.age}</p>
              <p><strong>Qualifications:</strong> {profileData.qualifications}</p>
              <p><strong>Projects:</strong> {profileData.projects}</p>
              <p><strong>Previous Jobs:</strong> {profileData.previousJobs}</p>
              <p><strong>Experience:</strong> {profileData.experience}</p>
            </>
          )}
          {userType === 'employer' && (
            <>
              <p><strong>Company Name:</strong> {profileData.companyName}</p>
              <p><strong>Company Details:</strong> {profileData.companyDetails}</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
