import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import People from './People';
import Starships from './Starships';
import Planets from './Planets';
import Films from './Films';
import Vehicles from './Vehicles';
import Specis from './Specis';
const DisplayStar = (props) => {
  // userparms
  const {search, id} = useParams();

  // to map using state to through api
  let [starsWars, setStar] = useState({});
  let [error, setEroor] = useState(false);
  
  // axios api
  useEffect(() =>{
    axios.get(`https://swapi.dev/api/${search}/${id}`)
    .then(response=>{
      console.log('Your response is:',response)
      setStar(response.data)
    })
    .catch(error=>{
      console.log('You found some error')
      setEroor(true)
    })

  },[id])
  return (
  <div>
    <div>
      {
        
        search == 'people' && (!isNaN(id))?
        <People starsWars={starsWars}></People>:search == 'starships' && (!isNaN(id))?<Starships starsWars={starsWars}/>:search=='planets' && (!isNaN(id))?
        <Planets starsWars={starsWars}/>:search =='films' && (!isNaN(id))?<Films starsWars={starsWars}/>:search=='vehicles' && (!isNaN(id))?<Vehicles starsWars={starsWars}/>:search=='species' && (!isNaN(id))? <Specis starsWars={starsWars}/>: null
      }
    </div>
      {error?
        <div className='error'>
          <h1>"These aren't the droids you're looking for"</h1>
          <img src='https://c.tenor.com/zZl0SFFuq7EAAAAC/kenobi-not-the-droids.gif' alt='eroor'/>
          <p>Found error please refrash</p>
        </div>:null
      }
  </div>
  );
};


export default DisplayStar;