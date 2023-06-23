import React from 'react';
import { Link } from 'react-router-dom';

const StudentOptions = () => {
  return (
    <div>
      <h2>Student Options</h2>
      <ul>
        <li>
          <Link to="/student/register">Register</Link>
        </li>
        <li>
          <Link to="/student/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentOptions;

