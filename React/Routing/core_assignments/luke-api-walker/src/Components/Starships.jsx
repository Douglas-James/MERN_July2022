import React from 'react';

const Starships = (props) => {
  const {starsWars} = props;
  return (
    <div>
        <h1>Ship: {starsWars.name}</h1>
        <p>Maufacturer: {starsWars.manufacturer}</p>
        <p>Length: {starsWars.length}</p>
        <p>Films: {starsWars.films}</p>
        <p>Crew: {starsWars.crew}</p>
        <p>Model: {starsWars.model}</p>
        <p>Star Class: {starsWars.starship_class}</p>
    </div>
  );
};


export default Starships;