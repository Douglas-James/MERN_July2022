import React, { useReducer, useState } from "react";
import validator from 'validator'
// // creat variable object or anythings up here
//  const initialState = {
//        firstName: {
//        value: '',
//        error: null
//      },
//      lastName: {
//        value: '',
//        error: null
//      },
//      email: {
//          value: '',
//          error: null
//      }
//   };
//   // function here
//   const reducer = (state, action) => 
//   {
//    return{
//      ...state,
//      [action.type]: action.playload
//    };
//   }
  
  export default () => {
  // validation email
  const [emailError, setEmailError] = useState('')
  // function for validation
  const validateEmail = (e) => {
    var email = e.target.value
  
    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      setEmailError('Email is invalid!')
    }
  }

  // // funcgtion for reducer and initial state
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const handleChange = (e) => {
  //   const {name, value} = e.target;
  //   dispatch({
  //     type: name,
  //     playload: value
  //   })
  // }

  
  
  return (
    <div style={{
      margin: 'auto',
      marginLeft: '300px',
    }}>
      <form>
         <span>Enter Email: </span><input type="email" id="userEmail" name="email" onChange={(e) => validateEmail(e)} ></input> <br />
        <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{emailError}</span>
      </form>
    </div>
  );
}
  
