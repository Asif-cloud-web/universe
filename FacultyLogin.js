import React, { useState } from 'react';

const FacultyLogin = () => {
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      empId,
      password,
    };

    try {
      // Make the API request to login the faculty
      const response = await fetch('/api/v1/faculty/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Logged in successfully. Faculty ID: ${data.data.id}`);
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
      <h2>Faculty Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee ID:</label>
          <input type="text" value={empId} onChange={(e) => setEmpId(e.target.value)} />
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

export default FacultyLogin;

