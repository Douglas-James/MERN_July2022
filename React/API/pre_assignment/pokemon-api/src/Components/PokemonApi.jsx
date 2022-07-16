import React, {useState} from 'react';
import './pokemon.css'
const PokemonApi = (props) => {
// get the json file for state
let [pokem, setPokem] = useState([])




// fetching the only on the click 
const getData = () =>{
  fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response=>{return response.json()}) // just return json file
      .then(response=>{console.log('this working -->', response); setPokem(response.results)})
}



  return (
    <div>
        <button onClick={getData} className='btn'>Fetch Pokemon</button>
        {
          pokem.map((pokemObject, index) => {
            return (
              <div key={index} className='pokem-name'>
                <h3 className='names'>Name: {pokemObject.name}</h3>
                {
                  index === 806?<p>Number of pokem Name: {index+1}</p>: null
                }

                  
              </div>
            )
          })
        }

    </div>
  );
};

export default PokemonApi;