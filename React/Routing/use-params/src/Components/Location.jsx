import React from 'react';
import {
  link, Routes, Route, useParams
} from 'react-router-dom';

const Location = (props) => {
  const {city} = useParams(); // Matches our :city in our routes
  return (
    <div>
        <h1>Welcome to { city }!</h1>
    </div>
  );
};



export default Location;