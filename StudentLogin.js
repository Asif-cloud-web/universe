// StudentLogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const [regNo, setRegNo] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      regNo,
      password,
    };

    try {
      // Make the API request to log in the student
      const response = await fetch('/api/v1/student/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage('Login successful.');
        // Perform any necessary actions after successful login (e.g., store token in state/local storage)
        navigate('/student/dashboard'); // Navigate to student dashboard
      } else {
        const error = await response.json();
        setMessage(`Login failed. Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during login.');
    } finally {
      navigate('/student/dashboard'); // Navigate to student dashboard regardless of success or error
    }
  };

  return (
    <div>
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Registration Number:</label>
          <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)} />
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

export default StudentLogin;
