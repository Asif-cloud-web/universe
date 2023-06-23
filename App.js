// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import StudentOptions from './StudentOptions';
import StudentRegister from './StudentRegister';
import StudentLogin from './StudentLogin';
import WardenLogin from './WardenLogin';
import FacultyRegister from './FacultyRegister';
import FacultyLogin from './FacultyLogin';
import FacultyOptions from './FacultyOptions';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Hostel Management System</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/student" element={<StudentOptions />} />
          <Route path="/student/register" element={<StudentRegister />} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/warden" element={<WardenLogin />} />
          <Route path="/faculty" element={<FacultyOptions />} />
          <Route path="/faculty/registration" element={<FacultyRegister />} />
          <Route path="/faculty/login" element={<FacultyLogin />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
