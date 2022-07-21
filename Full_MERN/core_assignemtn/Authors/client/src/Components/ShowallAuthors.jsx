import React, { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import axios from 'axios';




const ShowallAuthors = () => {
  const [nameAuthors, SetName] = useState([]);
  // console.log(nameAuthors.id)

  // make sure it update new info
  const [updateDelete, setDelet] = useState(false);

  // get all the new data
  useEffect(() =>{
    axios.get('http://localhost:8000/api/new')
    .then(response =>{
      console.log('This the response: ', response)
      SetName(response.data.results)
    })
    .catch(error=>{console.log(error)})

  }, [updateDelete])

  // delet  authors 
  const deletName = (id) =>{
    axios.delete(`http://localhost:8000/api/delete/${id}`)
    .then(response => {
      console.log('You have delete: ', response)
      setDelet(!updateDelete)
    })
    .catch(error=>{
      console.log(error)
    })
    

  }

  return (
    <div>
        <table className='table table-striped'>
          <thead>
            <tr>
                <th>Authors</th>
                <th>Actions Aviable</th>
              </tr>
          </thead>
          <tbody>
            {
              nameAuthors.sort(function(a, b) {
                        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                        return 0;
                })
              .map((names) =>{
                return (
                  <tr key={names._id}>
                    <td>{names.name}</td>
                    <td><Link to={`/edit/${names._id}`} className='btn btn-warning m-3'>Edit</Link><button className='btn btn-danger' onClick={()=>deletName(names._id)} >Delete</button></td>
                  </tr>
                  
                )
              })
            }
          </tbody>
        </table>
    </div>
  );
};



export default ShowallAuthors;