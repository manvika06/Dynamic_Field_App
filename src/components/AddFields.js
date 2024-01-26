// src/components/AddFields.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addField } from '../actions/dynamicFieldsActions';
import './AddField.css';

const AddFields = () => {
  const dispatch = useDispatch();
  const [fieldName, setFieldName] = useState('');
  const [fieldType, setFieldType] = useState('Text Box'); // Default to Text Box
  const [fieldDataType, setFieldDataType] = useState('Text');
  const [fieldValidations, setFieldValidations] = useState('');
  const [isMandatory, setIsMandatory] = useState('Text Box');
  const [selectedCategory, setSelectedCategory] = useState('student');

  const handleAddField = () => {
    const fieldData = {
      fieldName,
      fieldType,
      fieldDataType,
      fieldValidations,
      isMandatory,
      category: selectedCategory,
    };

    dispatch(addField(fieldData));

    // Reset the form
    setFieldName('');
    setFieldType('Text Box');
    setFieldDataType('Text');
    setFieldValidations('');
    setIsMandatory(false);
  };

  const renderCategorySpecificFields = () => {
    switch (selectedCategory) {
      case 'student':
        return (
          <>
            <label>
              Additional Student Field:
              <input type="text" />
            </label>
          </>
        );
      case 'salaried':
        return (
          <>
            <label>
              Additional Salaried Field:
              <input type="text" />
            </label>
          </>
        );
      case 'business':
        return (
          <>
            <label>
              Additional Business Field:
              <input type="text" />
            </label>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2>Add Field</h2>
      <label>
        Select Category:
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="student">Student</option>
          <option value="salaried">Salaried</option>
          <option value="business">Business</option>
        </select>
      </label>
      <br />
      <label>
        Field Name:
        <input type="text" value={fieldName} onChange={(e) => setFieldName(e.target.value)} />
      </label>
      <br />
      <label>
        Field Type:
        <select value={fieldType} onChange={(e) => setFieldType(e.target.value)}>
          <option value="Text Box">Text Box</option>
          <option value="Drop-Down">Drop-Down</option>
          <option value="Date Picker">Date Picker</option>
        </select>
      </label>
      <br />
      {renderCategorySpecificFields()}
      <br />
      <button onClick={handleAddField}>Add Field</button>
    </div>
  );
};

export default AddFields;
