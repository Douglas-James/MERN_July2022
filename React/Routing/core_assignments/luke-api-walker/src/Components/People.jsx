import React from 'react';

const People = (props) => {
  const {starsWars} = props;
  return (
    <div>
      <h1>{starsWars.name}</h1>
      <p>Height: {starsWars.height} cm</p>
      <p>Mass: {starsWars.mass} kg</p>
      <p>Hair Color: {starsWars.hair_color}</p>
      <p>Skin color: {starsWars.skin_color}</p>
    </div>
  );
};
export default People;