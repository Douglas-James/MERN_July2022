import React, { useState} from 'react';
import {
  Link
} from "react-router-dom";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const AdAuthors = () => {
  // error catcching 
  let [formEroor, setFormError] = useState({});

  // state handling
  let [forminfo, setForm] = useState({});

  // if for is good send back to the home page
  const navigate = useNavigate();

  // axios add new 
  // submit form handler
  const handsubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/new', forminfo)
    .then(response=>{
      console.log('Submited', response)
      if(response.data.errors){
      setFormError(response.data.errors)
    }else{
      setFormError({})
      navigate('/')
    }
    })
    .catch(err=>{console.log(err)})
  }

  // inputs
  const inputHandler = (e) =>{
    setForm({
      ...forminfo,
      [e.target.name]: e.target.value
    })
  }



  return (
    <div>
        <h1>Favorite authors</h1>
        <Link to='/'>Home</Link>
        <p>Add a New authors</p>
        <form onSubmit={handsubmit}>
            <div className='form-group'>
                  <label>Name:</label>
                  <input type='text'  name='name' className='form-controller' onChange={inputHandler}/>
                  <p className='text-danger'>{formEroor.name?.message}</p>
                  <br/>
                  <Link to='/' className='btn btn-primary'>Cancel</Link>
                  <input type='submit' value='Submit' className='btn btn-primary m-2'/>
            </div>
        </form>
    </div>
  );
};


export default AdAuthors;