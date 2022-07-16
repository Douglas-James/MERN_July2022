import React, {useState} from 'react';
import axios from 'axios';


const Axios_pokemon = () => {
  // state variable for pokemen on axios
  let [pokem, setPokem] = useState([])
  console.log(pokem)

// something but different then fatching 
const getData = () =>{
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response=>{
        console.log(response)
        setPokem(response.data.results)
      })

}




  return (
    <div>
        <button onClick={getData}>Fetch PokeMon</button>
        {
          pokem.map((pokemObject, index) => {
            return(
              <div key={index}>
                  <h3>Name: {pokemObject.name}</h3>
                  {
                    index === 806?<p>Number of Names: {index+1}</p>: null
                  }
              </div>
            )

          })
        }
    </div>
  );
};



export default Axios_pokemon;