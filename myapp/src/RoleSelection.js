import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function RoleSelection({ onLogin }) {  
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    onLogin({}, role);  
    localStorage.setItem('role', role);  
    navigate(`/${role}Interface`);
  };

  return (
    <div className="role-selection-container">
      <h2>Select Your Role</h2>
      <button onClick={() => handleRoleSelection('candidate')} className="btn-submit">
        Candidate
      </button>
      <button onClick={() => handleRoleSelection('employer')} className="btn-submit">
        Employer
      </button>
    </div>
  );
}

export default RoleSelection;
