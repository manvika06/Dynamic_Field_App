// src/reducers/dynamicFieldsReducer.js
const initialState = {
    fields: [],
  };
  
  const dynamicFieldsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FIELD':
        return {
          ...state,
          fields: [...state.fields, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default dynamicFieldsReducer;
  