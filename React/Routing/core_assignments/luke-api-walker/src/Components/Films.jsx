import React from 'react';

const Films = (props) => {
  const {starsWars} = props;
  return (
    <div>
      <h1>{starsWars.title}</h1>
      <p>Episodes: {starsWars.episode_id}</p>
      <p>Director: {starsWars.director}</p>
      <p>Producers: {starsWars.producer}</p>
      <p>Release Date: {starsWars.release_date}</p>
      <p>Description: {starsWars.opening_crawl}</p>
    </div>
  );
};

export default Films;