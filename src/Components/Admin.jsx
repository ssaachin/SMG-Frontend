// Admin.jsx
import React, { useState } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

export default function Admin() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Callback function to update the login status
  const handleLogin = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  return (
    <>
      {loggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </>
  );
}
