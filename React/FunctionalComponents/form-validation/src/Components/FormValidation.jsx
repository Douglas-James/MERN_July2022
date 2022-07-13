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
  const [state, dispatch] = useReducer(reducer, initalState);
  let [hasBeenSubmitted, setHasbeenSubmitted] = useState(false)
  // console.log(firstName)
  // console.log(lastName)
  // console.log(email)

  const createUser = (e) => {
      e.preventDefault();
      const newUser = 'test'
      console.log("Welcome", newUser);
      setHasbeenSubmitted(true);
    };

    const formMessage = () =>{
      if(hasBeenSubmitted){
        return 'Thank You for the sub!'
      }
      else{
        return 'Welcome, please submit the form';
      }
    }

  const handleChange = (e) => {
    const { name, value} = e.target;
    dispatch({
      type: name,
      payload: value,
    });
  }
  return (
    <form onSubmit={createUser}>
      <h3>{formMessage()}</h3>
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
          <input type="submit" value="Submit" />
        </label>
      </div>
    </form>
  );
};
