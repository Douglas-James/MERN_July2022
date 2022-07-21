import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Edit = () => {
  const {id} = useParams();
  let [products, setProducts] = useState({})
  const navigate = useNavigate();
  const [notFound, setNotFound] =useState(false)  // if the don't the id
 
  useEffect(() =>{
        axios.get(`http://localhost:8000/api/product3/${id}`)
        .then(response=>{
            console.log("this my response: ", response);
            if(response.data.results){
              setProducts(response.data.results);
            }else{
              setNotFound(true)
            }
        })
        .catch(error=>{console.log(error)})
  }, [id])

  // need make sure i can change value
  const changeHandler = (e) =>{
    setProducts({
      ...products,
      [e.target.name]: e.target.value
    })
  }

  // submite handler
  const handsubmit = (e) =>{
      e.preventDefault();
      axios.put(`http://localhost:8000/edit/product3/${id}`, products)
      .then(response=>{
        console.log('submited: ', response)
        navigate("/")
      })
      .catch(err=>{console.log(err)})
  }
  return (
    <div>
      <h3>Edit Product</h3>
      <form onSubmit={handsubmit}>
            <div className='form-group'>
                  <label htmlFor="">Title:</label>
                  <input type="text" name='title' className='form-controler m-3'value={products.title} onChange={changeHandler}  />
            </div>
            <div className='form-group'>
                  <label htmlFor="">Price:</label>
                  <input type="number" name='price'   className='form-controler m-3' value={products.price} onChange={changeHandler} />
            </div>
            <div className='form-group'>
                  <label htmlFor="">Description:</label>
                  <input type="text" name='description'  className='form-controler m-3' value={products.description} onChange={changeHandler} />
            </div>
            <input type="submit" value="update" className='btn btn-primary m-3' />
        </form>
        <hr/>
        {notFound?
            <img src='https://matob.web.id/random/wp-content/uploads/sites/2/2021/12/error-404-NOT-FOUND.jpg' alt='not found' />:null
        }
    </div>
  );
};


export default Edit;