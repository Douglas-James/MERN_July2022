import React from 'react';
import {
  Link 
} from "react-router-dom";

const Home = () => {
  return (
    <div>
         <h1 style={{color: "red"}}>Home Component</h1>
         <Link to={"/contacts"}>Go to About </Link>
    </div>
  );
};



export default Home;