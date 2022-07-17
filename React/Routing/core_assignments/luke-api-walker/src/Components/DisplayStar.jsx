import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const DisplayStar = (props) => {
  // userparms
  const {search, id} = useParams();

  // to map using state to through api
  let [starsWars, setStar] = useState({});
  
  // axios api
  useEffect(() =>{
    axios.get(`https://swapi.dev/api/${search}/${id}`)
    .then(response=>{
      console.log('Your response is:',response)
      setStar(response.data)
    })
    .catch(error=>{
      console.log('You found some error')
    })

  },[id])
  return (
    <div>
      <h1>{starsWars.name}</h1>
      <p>Height: {starsWars.height}</p>
      <p>Mass: {starsWars.mass}kg</p>
      <p>Hair Color: {starsWars.hair_color}</p>
      <p>Skin color: {starsWars.skin_color}</p>
    </div>
  );
};


export default DisplayStar;