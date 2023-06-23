import React, { useState } from 'react';

const FacultyRegister = () => {
  const [name, setName] = useState('');
  const [empId, setEmpId] = useState('');
  const [password, setPassword] = useState('');
  const [isHOD, setIsHOD] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      name,
      empId,
      password,
      isHOD,
    };

    try {
      // Make the API request to register the faculty
      const response = await fetch('/api/v1/faculty/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Faculty registered successfully. ID: ${data.faculty.id}`);
      } else {
        const error = await response.json();
        setMessage(`Registration failed. Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during registration.');
    }
  };

  return (
    <div>
      <h2>Faculty Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Employee ID:</label>
          <input type="text" value={empId} onChange={(e) => setEmpId(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Is HOD:</label>
          <input type="checkbox" checked={isHOD} onChange={(e) => setIsHOD(e.target.checked)} />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default FacultyRegister;

