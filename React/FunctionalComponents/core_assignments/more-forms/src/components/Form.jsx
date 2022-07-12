// import useState
import React, {useState} from "react";

const From = (props) =>
{
  // Create state variable to keep track of form info
  let [firstName, setFirst] = useState('');
  let [lastName, setLast] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [confirmPassword, setConfirm] = useState('')
  console.log(firstName)
  console.log(lastName)
  // write functional
  // don't forget to console log it
 
  
  
  // return with html
  return (
    // {
    //   firstName.length<3 && firstName.length>0? <p>first Name need to 3</p> : null
    // }
    <div className="container">
      <form>
        <label htmlFor="firstname">FirstName</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setFirst(e.target.value)}
        />
        {/* Validation first name */}
        {firstName.length < 2 && firstName.length > 0 ? (
          <p>First Name must be at least 2 characters</p>
        ) : null}
        <label htmlFor="lastname">Last Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setLast(e.target.value)}
        />
        {/* validation last name */}
        {lastName.length < 2 && lastName.length > 0 ? (
          <p>Lirst Name must be at least 2 characters</p>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
        />
        {email.length < 2 && email.length > 0 ? (
          <p>Email must be at least 2 characters</p>
        ) : null}
        <label htmlFor="passowrd">Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        {password.length < 8 && password.length > 0 ? (
          <p>Password must be at least 8 characters</p>
        ) : null}
        <label htmlFor="confirm">Confirm</label>
        <input
          type="password"
          onChange={(e) => setConfirm(e.target.value)}
          className="form-control"
        />
        {confirmPassword.length == password.length ? null : (
          <p>Password must match</p>
        )}
      </form>
      <hr />
      <div className="container">
        <h3>First Name: {firstName}</h3>
        <h3>Last Name: {lastName}</h3>
        <p>Email: {email}</p>
        <p>Password:{password} </p>
        <p>Confirmed: {confirmPassword}</p>
      </div>
    </div>
  );

}; 

export default From;
