import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentRegister = () => {
  const [name, setName] = useState('');
  const [regNo, setRegNo] = useState('');
  const [block, setBlock] = useState('');
  const [password, setPassword] = useState('');
  const [roomNo, setRoomNo] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the request body
    const requestBody = {
      name,
      regNo,
      block,
      password,
      roomNo,
    };

    try {
      // Make the API request to register the student
      const response = await fetch('/api/v1/student/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(`Student registered successfully. ID: ${data.data.id}`);
      } else {
        const error = await response.json();
        setMessage(`Registration failed. Error: ${error.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred during registration.');
    } finally {
      navigate('/student/dashboard'); // Navigate to student dashboard regardless of success or error
    }
  };

  return (
    <div>
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Registration Number:</label>
          <input type="text" value={regNo} onChange={(e) => setRegNo(e.target.value)} />
        </div>
        <div>
          <label>Block:</label>
          <input type="text" value={block} onChange={(e) => setBlock(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Room Number:</label>
          <input type="text" value={roomNo} onChange={(e) => setRoomNo(e.target.value)} />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default StudentRegister;
