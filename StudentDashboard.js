import React, { useEffect, useState } from 'react';
import getStudentMe from './studentme';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    fetchStudentData();
  }, []);

  const fetchStudentData = async () => {
    try {
      const authToken = 'your_auth_token_here'; // Replace with your actual auth token
      const data = await getStudentMe(authToken);
      setStudentData(data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  };

  return (
    <div>
      <h1>Student Dashboard</h1>
      {studentData ? (
        <div>
          <h2>Welcome, {studentData.name}!</h2>
          <h3>Personal Information</h3>
          <p>Email: {studentData.email}</p>
          <p>Phone Number: {studentData.phone_number}</p>
          <p>Block: {studentData.block}</p>
          <p>Registration Number: {studentData.regNo}</p>
          <h3>Room Information</h3>
          <p>Room Number: {studentData.Room.roomNo}</p>
          <p>Room Block: {studentData.Room.block}</p>
          <h3>Complaints</h3>
          {studentData.complaint.map((complaint) => (
            <div key={complaint.id}>
              <p>Type: {complaint.complaintType}</p>
              <p>Date: {complaint.complaintDate}</p>
              <p>Description: {complaint.complaintDescription}</p>
              <p>Severity: {complaint.complaintSeverity}</p>
              <p>Resolved: {complaint.isResolved ? 'Yes' : 'No'}</p>
            </div>
          ))}
          <h3>Leave Requests</h3>
          {studentData.leave.map((leave) => (
            <div key={leave.id}>
              <p>Type: {leave.leaveType}</p>
              <p>Date: {leave.leaveDate}</p>
              <p>Time: {leave.leaveTime}</p>
              <p>Duration: {leave.LeaveDuration} day(s)</p>
              <p>Approved: {leave.isApproved ? 'Yes' : 'No'}</p>
              <p>Rejected: {leave.isRejected ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading student data...</p>
      )}
    </div>
  );
};

export default StudentDashboard;
