import React, {useEffect, useState} from 'react';
import axios from 'axios'

const FullMERN = () => {
  // axios setting and useState
  let [merns, setMerns] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/merns')
              .then(response => {
                console.log('This is response: ', response)
                setMerns(response.data.results)
              })
              .catch(err=>console.log(err))
    }, [])
  return (
    <div>
          <h3>All Merns Below</h3>
          {
            merns.map((mern) =>{
              return(
                <div className='card md-3 p-3' key={mern._id}>
                    <h2>{mern.firstName}</h2>
                    <img src={mern.imgUrl} width='200px' height='200px' className='mx-auto' alt={mern.firstName}/>
                    <h4>{mern.lastName}</h4>
                    <p>{mern.email}</p>
                </div>
              )
            })
          }

    </div>
  );
};


export default FullMERN;