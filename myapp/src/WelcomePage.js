import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function WelcomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login'); 
  };

  return (
    <div className="welcome-page">
      <h1>Welcome to the Job Portal</h1>
      <button className="btn-get-started" onClick={handleGetStarted}>Get Started</button>
    </div>
  );
}

export default WelcomePage;
