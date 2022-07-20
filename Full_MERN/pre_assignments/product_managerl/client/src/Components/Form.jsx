import axios from 'axios';
import React, {useState} from 'react';

const Form = () => {

  // get everything from the form
  let [forminfo, setForm] = useState({});
  let [error,setError] = useState({});
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
    axios.post('http://localhost:8000/api/product', forminfo)
    .then(response => {
      console.log("you have form is submitted", response)
      if(response.data.errors){
        setError(response.data.errors);
      }else{
        setError({});
        e.target.reset();
      }
    })
    .catch(err=>{console.log(err)})
}


  return (
    <div>
        <h3>Product Manager</h3>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
              <label htmlFor="">Title:</label>
              <input type="text"  className='form-control' name='title' onChange={handinput}/>
          </div>
          <div className='form-group'>
              <label htmlFor="">Price: </label>
              <input type="number"  className='form-control' name='price' onChange={handinput}/>
          </div>
          <div className='form-group'>
              <label htmlFor="">Description: </label>
              <input type="text"  className='form-control' name='description' onChange={handinput}/>
          </div>
          <input type="submit" value="Create" className='btn btn-success m-3'/>
        </form>
    </div>
  );
};

export default Form;