import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {
  Link
} from "react-router-dom";
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

const EditAuthors = () => {

  const [notFound, setNotFound] = useState(false);
  const [errors, setErros] = useState({})
    // if for is good send back to the home page
  const navigate = useNavigate();

// get id 
const {id} = useParams();

// get the data
const [details, setDatails] = useState({});
// get axios
useEffect(() => {
  axios.get(`http://localhost:8000/api/new/${id}`)
  .then(response=>{
    console.log('The is a response: ', response)
    if(response.data.results){
      setDatails(response.data.results)
    }
    else{
      setNotFound(true);
    }
  })
  .catch(error=>{console.log(error)})
},[])

// handinput 
const inputHander = (e) => {
  setDatails({
    ...details,
    [e.target.name]: e.target.value
  })
}

// subit hander
const handsubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/new/${id}`, details)
    .then(response=>{
      console.log('Submited', response)
      if(response.data.errors){
      setErros(response.data.errors)
    }else{
      setErros({})
      navigate('/')
    }
    })
    .catch(errors=>{console.log(errors)})
  }



  return (
    <div>
      {/* Form */}
      {
        notFound?<>
          <p>We're sorry, but could not find the author you are looking for would you like to add a new author</p>
          <Link to='/add/authors' className='btn btn-primary'>Add a author</Link>
          <img src='https://i.stack.imgur.com/6M513.png' alt='not-found' />
          </> : <>
        <h1>Favorite authors</h1>
        <Link to='/' className='btn btn-primary'>Home</Link>
        <p>Edit This authors</p>
        <form onSubmit={handsubmit}>
              <div className='form-group'>
                    <label>Name:</label>
                    <input type='text'  name='name' className='form-controller' value={details.name} onChange={inputHander}/>
                    <p className='text-danger'>{errors.name?.message}</p>
                    <br/>
                    <Link to='/' className='btn btn-primary'>Cancel</Link>
                    <input type='submit' value='Submit' className='btn btn-primary m-2'/>
              </div>
          </form>
          </>
      }
        <hr/>
    </div>
  );
};


export default EditAuthors;