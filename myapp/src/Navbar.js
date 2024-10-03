import React from 'react';

function Navbar({ role, handleLogout }) {
  return (
    <nav className="navbar">
      <button onClick={handleLogout}>Logout</button>
    </nav>
  );
}

export default Navbar;
