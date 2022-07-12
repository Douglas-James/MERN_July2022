// import useState
import React, {useState} from "react";

const From = () =>
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
    <div className="container">
      <form>
        <label htmlFor="firstname">FirstName</label>
        <input type="text" className="form-control" onChange={(e) => setFirst(e.target.value)}/>
        <label htmlFor="lastname">Last Name</label>
        <input type="text" className="form-control" onChange={(e) => setLast(e.target.value)}/>
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
        <label htmlFor="passowrd">Password</label>
        <input type="password" onChange={(e)=> setPassword(e.target.value)} className="form-control"/>
        <label htmlFor="confirm">Confirm</label>
        <input type="password" onChange={(e)=> setConfirm(e.target.value)} className="form-control"/>
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
