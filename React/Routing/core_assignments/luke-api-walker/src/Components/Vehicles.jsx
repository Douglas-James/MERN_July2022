import React from 'react';


const Vehicles = (props) => {
  const {starsWars} = props;
  return (
    <div>
      <h1>Vehicle: {starsWars.name}</h1>
      <h3>Model: {starsWars.model}</h3>
      <p>Price: {starsWars.cost_in_credits}</p>
      <p>Crew: {starsWars.crew}</p>
      <p>Length: {starsWars.length}</p>
      <p>Speed: {starsWars.max_atmosphering_speed}</p>
      <p>Passengers: {starsWars.passengers}</p>
      <p>Vehicale Class: {starsWars.vehicle_class}</p>
    </div>
  );
};

export default Vehicles;