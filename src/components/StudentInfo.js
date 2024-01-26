
// src/components/StudentInfo.js
import React, { useState } from 'react';
import { FaCalendar } from 'react-icons/fa'; 
import './StudentInfo.css';

const StudentInfo = () => {
  const [department, setDepartment] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDOB] = useState('');
  const [pincode, setPincode] = useState('');

  const handleSubmit = () => {
    console.log('Form submitted:', { department, mobileNumber, dob, pincode });
  };

  return (
    <div className="student-info-container">
      <h2>Student Information</h2>
      <form>
        <label>
          Department:
          <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
        </label>
        <br />
        <label>
          Mobile Number:
          <input type="text" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <div style={{ position: 'relative' }}>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
            <span className="input-icon">
              <FaCalendar />
            </span>
          </div>
        </label>
        <br />
        <label>
          Pincode:
          <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default StudentInfo;

