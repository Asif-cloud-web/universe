// HomePage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const HomePage = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.fadeIn');
    elements.forEach((element) => {
      element.style.animationDelay = '0.5s'; // Add a delay to stagger the animations
    });
  }, []);

  return (
    <div className="container">
      <h1 className="fadeIn">Welcome to Hostel Management System</h1>
      <h2 className="fadeIn">Please select your role:</h2>
      <ul className="fadeIn">
        <li>
          <Link to="/student">Student</Link>
        </li>
        <li>
          <Link to="/warden">Warden</Link>
        </li>
        <li>
          <Link to="/faculty">Faculty</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
