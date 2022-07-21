import React, { useState } from 'react';
import axios from 'axios';


const Form = (props) => {
  // error catcher for mongoose
  // if form isn't follow the required show text to user
  let [formError, setFormEroor] = useState({});

  // get everything one state
  let [forminfo, setForm] = useState({});
  
  
  // and change inputs values
  const inputHandler = (e) =>{
    setForm({
      ...forminfo,
      [e.target.name]: e.target.value
    })

  }
  
  // submit form handler
  const handsubmit = (e) =>{
      e.preventDefault();
      axios.post('http://localhost:8000/api/product2', forminfo)
      .then(response=>{
        console.log('submited: ', response)
        if(response.data.errors){
          setFormEroor(response.data.errors)
        }else{
          setFormEroor({})
          props.setHaveForm(!props.IhaveForm);
        }
      })
      .catch(err=>{console.log(err)})
  }
  return (
    <div>
        <h1>Product Manager</h1>
        <form onSubmit={handsubmit}>
            <div className='form-group'>
                  <label htmlFor="">Title:</label>
                  <input type="text" name='title' className='form-controler m-3' onChange={inputHandler}/>
                  <p className='text-danger'>{formError.title?.message}</p>
            </div>
            <div className='form-group'>
                  <label htmlFor="">Price:</label>
                  <input type="number" name='price'   className='form-controler m-3' onChange={inputHandler}/>
                  <p className='text-danger'>{formError.price?.message}</p>
            </div>
            <div className='form-group'>
                  <label htmlFor="">Description:</label>
                  <input type="text" name='description'  className='form-controler m-3' onChange={inputHandler}/>
                  <p className='text-danger'>{formError.description?.message}</p>
            </div>
            <input type="submit" value="Create" className='btn btn-success m-3' onChange={inputHandler}/>
        </form>
    </div>
  );
};



export default Form;