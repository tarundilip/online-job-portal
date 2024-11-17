import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('choose');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password || role === 'choose') {
      alert('Please fill in all fields and select a role.');
      return;
    }
    onLogin({ username }, role);
    navigate(`/${role}Interface`);
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="choose">Choose</option>
            <option value="candidate">Candidate</option>
            <option value="employer">Employer</option>
          </select>
        </div>
        <button type="submit" className="btn-submit">Login</button>
      </form>
      <div className="signup-options">
        <button onClick={() => navigate('/signup?role=candidate')} className="btn-signup">
          Sign Up as Candidate
        </button>
        <button onClick={() => navigate('/signup?role=employer')} className="btn-signup">
          Sign Up as Employer
        </button>
      </div>
    </div>
  );
}

export default Login;
