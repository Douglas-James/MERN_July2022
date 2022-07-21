import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const OneProduct = () => {
  // using parms to get id passing the product id
  const {id} = useParams()

  // using usestate get all the if about that one product
  const [getone, setGet] = useState({});
  const [notFound, setNotFound] =useState(false)
  const navigate = useNavigate();
// get one product 
useEffect(() => {
  axios.get(`http://localhost:8000/api/product3/${id}`)
      .then(response=>{
        console.log(response)
        if(response.data.results){
          setGet(response.data.results)
        }else{
            setNotFound(true)
        }
      })
      .catch(error=>console.log(error))

}, [id])

// deleting Product
const deleteoneProduct = () =>{
    axios.delete(`http://localhost:8000/api/product3/${id}`)
          .then(response=>{
            console.log(response)
            navigate('/')
          })
        .catch(error=>console.log(error))
}



// html return
  return (
    <div>
      {notFound?
      <img src='https://matob.web.id/random/wp-content/uploads/sites/2/2021/12/error-404-NOT-FOUND.jpg' alt='not found' />:
      <>
        <h1>Detail about your One Product</h1>
        <h2>{getone.title}</h2>
        <p>Price: {getone.price}</p>
        <p>Description: {getone.description}</p>
        <Link to='/' className='btn btn-primary mt-3'>Home Remove it soon</Link><br/>
        <button onClick={deleteoneProduct} className='btn btn-danger m-3'>Delet {getone.title}</button>
      </>
      }
    </div>
  );
};

export default OneProduct;