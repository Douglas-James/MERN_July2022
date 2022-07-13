// useReducer import
import React, { useReducer, useState } from "react";

const initalState = {
  firstName: {
    value: '',
    error: null
  },
  lastName: {
    value: '',
    error: null
  },
  email: {
    value: '',
    error: null
  }
};
const reducer = (state, action) => {
  return {
    ...state,
    [action.type]: action.payload
  }
};


export default () => {
  // const [error, setEror] = useState(null)
  const [state, dispatch] = useReducer(reducer, initalState);
  // const isValidEmail = (email) => {
  //   return //s+@\s+\.\s+.test(email);
  // }

  const handleChange = (e) => {
    // if(!isValidEmail(e.target.value)){
    //     setEror('Email is invalid');
    // }else{
    //   setEror(null);
    // }
    const { name, value} = e.target;
    dispatch({
      type: name,
      payload: value,
    });
  }
  return (
    <div>
      <h1>{JSON.stringify(state)}</h1>
      <div>
        <label>
          <span>firstName:</span>{" "}
          <input name="firstName" value={state.value} onChange={handleChange} />
          {state.firstName.error !== null && (
            <p className="error">{state.firstName.error}</p>
          )}
        </label>
      </div>
      <div>
        <label>
          <span>lastName:</span>{" "}
          <input name="lastName" value={state.value} onChange={handleChange} />
          {state.lastName.error !== null && (
            <p className="error">{state.lastName.error}</p>
          )}
        </label>
      </div>
      <div>
        <label>
          <span>Email:</span>{" "}
          <input name="email" value={state.value} onChange={handleChange} />
        </label>
      </div>
    </div>
  );
};
