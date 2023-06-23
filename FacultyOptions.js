import React from 'react';
import { Link } from 'react-router-dom';

const FacultyOptions = () => {
  return (
    <div>
      <h2>Faculty Options</h2>
      <ul>
        <li>
          <Link to="/faculty/registration">Faculty Registration</Link>
        </li>
        <li>
          <Link to="/faculty/login">Faculty Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default FacultyOptions;

