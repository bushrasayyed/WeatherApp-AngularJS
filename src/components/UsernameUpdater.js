import React, { useState, useEffect } from 'react';
import '../App.css'; // Ensure to import the CSS for styles

const UsernameUpdater = () => {
  const [username, setUsername] = useState(''); // State for the username

  // useEffect to log the username whenever it changes
  useEffect(() => {
    console.log('Username updated:', username);
  }, [username]); // This effect runs whenever 'username' is updated

  return (
    <div>
      <h1>Username: {username}</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)} // Update state when input changes
      />
    </div>
  );
};

export default UsernameUpdater;
