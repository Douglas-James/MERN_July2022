import React from 'react';

const Specis = (props) => {
  const {starsWars} = props;
  return (
    <div>
      <h1>Specis: {starsWars.name}</h1>
      <h3>Language: {starsWars.language}</h3>
      <p>Life Span: {starsWars.average_lifespan} age</p>
      <p>Height: {starsWars.average_height} cm</p>
      <p>Designation: {starsWars.designation}</p>
      <p>Skin Color: {starsWars.skin_colors}</p>
    </div>
  );
};

export default Specis;