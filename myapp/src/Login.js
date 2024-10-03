import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login({ onLogin }) {
  const [usernameCandidate, setUsernameCandidate] = useState('');
  const [passwordCandidate, setPasswordCandidate] = useState('');
  const [usernameEmployer, setUsernameEmployer] = useState('');
  const [passwordEmployer, setPasswordEmployer] = useState('');
  const navigate = useNavigate();

  const handleCandidateLogin = (e) => {
    e.preventDefault();
    if (usernameCandidate && passwordCandidate) {
      const loggedUser = { username: usernameCandidate };
      onLogin(loggedUser, 'candidate');
      navigate('/candidateInterface');
    } else {
      alert('Please fill in both username and password for Candidate login.');
    }
  };

  const handleEmployerLogin = (e) => {
    e.preventDefault();
    if (usernameEmployer && passwordEmployer) {
      const loggedUser = { username: usernameEmployer };
      onLogin(loggedUser, 'employer');
      navigate('/employerInterface');
    } else {
      alert('Please fill in both username and password for Employer login.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-heading">
        <h1>LOGIN PAGE</h1>
        <p>Use the Console on the Left to LogIn as a Candidate & Use the Console on the Right to LogIn as an Employer.</p>
      </div>
      <div className="login-container">
        <div className="login-form">
          <h2>Candidate Login</h2>
          <form onSubmit={handleCandidateLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={usernameCandidate}
                onChange={(e) => setUsernameCandidate(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={passwordCandidate}
                onChange={(e) => setPasswordCandidate(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-submit">Log In</button>
          </form>
        </div>

        <div className="login-form">
          <h2>Employer Login</h2>
          <form onSubmit={handleEmployerLogin}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={usernameEmployer}
                onChange={(e) => setUsernameEmployer(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={passwordEmployer}
                onChange={(e) => setPasswordEmployer(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn-submit">Log In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
