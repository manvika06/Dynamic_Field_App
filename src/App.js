// src/App.js
import React from 'react';
import AddFields from './components/AddFields';
import DisplayFields from './components/DisplayFields';
import StudentInfo from './components/StudentInfo';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <h1>Dynamic Fields App</h1>
      <div className="flex-container">
        <AddFields />
        <DisplayFields />
        <StudentInfo />
      </div>
    </div>
  );
};

export default App;

