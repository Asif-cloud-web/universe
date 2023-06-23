import React, { useState } from 'react';

const WardenLogin = () => {
  const [block, setBlock] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      block,
      password,
    };

    try {
      // Make the API request to login the warden
      const response = await fetch('/api/v1/warden/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Warden login successful!');
        // Perform any necessary actions after successful login
      } else {
        const error = await response.json();
        setMessage(`Login failed. Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during login.');
    }
  };

  return (
    <div>
      <h2>Warden Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Block:</label>
          <input type="text" value={block} onChange={(e) => setBlock(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default WardenLogin;

