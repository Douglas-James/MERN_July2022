import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";
import { useParams } from 'react-router-dom';

const AllProducts = (props) => {
  // using state to show a products
  let [products, setProducts] = useState([])


  useEffect(() =>{
        axios.get('http://localhost:8000/api/product3')
        .then(response=>{
            console.log("this my response: ", response);
            setProducts(response.data.results)
        })
        .catch(error=>{console.log(error)})
  }, [props.IhaveForm])


  return (
    <div>
        <h2>All Products</h2>
        {
          products.map((product)=>{
            return(
              <div key={product._id}>
                  <h2 className='card-title'>{product.title}</h2>
                  {/* Need to use oneProduct its this one */}
                  <p className='card-text'><Link to={`/api/product2/${product._id}`}>{product.description}</Link></p> 
                  <Link to={`/edit/${product._id}`} className='btn btn-warning mt-3'>Edit{product.title}</Link>
              </div>
            )
          })
        }
    </div>
  );
};



export default AllProducts;