import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const OneProduct = () => {
  // using parms to get id passing the product id
  const {id} = useParams()

  // using usestate get all the if about that one product
  const [getone, setGet] = useState({});
  const [notFound, setNotFound] =useState(false)
  
useEffect(() => {
  axios.get(`http://localhost:8000/api/product2/${id}`)
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
  return (
    <div>
      {notFound?
      <img src='https://matob.web.id/random/wp-content/uploads/sites/2/2021/12/error-404-NOT-FOUND.jpg' alt='not found' />:
      <>
        <h1>Detail about your One Product</h1>
        <h2>{getone.title}</h2>
        <p>Price: {getone.price}</p>
        <p>Description: {getone.description}</p>
      </>
      }
    </div>
  );
};

export default OneProduct;