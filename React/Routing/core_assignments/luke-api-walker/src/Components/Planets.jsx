import React from 'react';


const Planets = (props) => {
  const {starsWars} = props;
  return (
    <div>
      <h1>{starsWars.name}</h1>
      <p>Climate: {starsWars.climate}</p>
      <p>Surface Water: {starsWars.surface_water}</p>
      <p>Population: {starsWars.population}</p>
    </div>
  );
};


export default Planets;