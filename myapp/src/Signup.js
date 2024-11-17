import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './App.css';

function Signup() {
  const [searchParams] = useSearchParams();
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const roleParam = searchParams.get('role');
    setRole(roleParam || 'candidate');
  }, [searchParams]);

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !password || !confirmPassword) {
      alert('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    alert(`${role.charAt(0).toUpperCase() + role.slice(1)} signed up successfully!`);
    setUsername('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="signup-page">
      <h1>Sign Up as {role.charAt(0).toUpperCase() + role.slice(1)}</h1>
      <form onSubmit={handleSignup}>
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
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn-submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
