// src/components/DisplayFields.js
import React from 'react';
import { useSelector } from 'react-redux';
import './DisplayFields.css';

const DisplayFields = () => {
  const fields = useSelector((state) => state.dynamicFields.fields);

  const handleConfirm = () => {
    console.log('Confirmed');
  };

  const handleReset = () => {
    console.log('Reset');
  };

  return (
    <div>
      <h2>List Of Added Fields</h2>
      <table>
        <thead>
          <tr>
            <th>Field Name</th>
            <th>Field Type</th>
            <th>Field Data Type</th>
            <th>Field Validations</th>
            <th>Is Mandatory</th>
            <th>Min Date</th>
            <th>Max Date</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((field, index) => (
            <tr key={index}>
              <td>{field.fieldName}</td>
              <td>{field.fieldType}</td>
              <td>{field.fieldDataType}</td>
              <td>{field.fieldValidations}</td>
              <td>{field.isMandatory ? 'Yes' : 'No'}</td>
              <td>{field.minDate}</td>
              <td>{field.maxDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleConfirm}>Confirm</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default DisplayFields;


