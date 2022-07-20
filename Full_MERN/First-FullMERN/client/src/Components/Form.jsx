import axios from 'axios';
import React, {useState} from 'react';

const Form = () => {
  // get everything from the form
  let [forminfo, setForm] = useState({})
 // get input and send to^
  const handinput = (e) =>{
    if(e.target.type == 'checkbox'){
      setForm({
        ...forminfo,
        [e.target.name]: e.target.checked
      })
    }else{
      setForm({
      ...forminfo,
      [e.target.name]: e.target.value
    })
    }
  }
const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/merns', forminfo)
    .then(response => {
      console.log("you have form is submitted", response)
    })
    .catch(err=>{console.log(err)})
}


  return (
    <div>
        <h3>Submit this form Mern</h3>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
              <label htmlFor="">First Name:</label>
              <input type="text"  className='form-control' name='firstName' onChange={handinput}/>
          </div>
          <div className='form-group'>
              <label htmlFor="">Last Name:</label>
              <input type="text"  className='form-control' name='lastName' onChange={handinput}/>
          </div>
          <div className='form-group'>
              <label htmlFor="">Image url</label>
              <input type="text"  className='form-control' name='imgUrl' onChange={handinput}/>
          </div>
          <div className='form-group'>
              <label htmlFor="">Email:</label>
              <input type="email"  className='form-control' name='email' onChange={handinput}/>
          </div>
          <div className='form-group'>
              <label htmlFor="">Age18+:</label>
              <input type="checkbox"  className='form-check-control' name='adult' onChange={handinput}/>
          </div>
          <input type="submit" value="Create" className='btn btn-success m-3'/>
        </form>
    </div>
  );
};

export default Form;