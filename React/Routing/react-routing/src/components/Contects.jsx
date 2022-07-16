import React from 'react';
import {
  Link 
} from "react-router-dom";
const Contects = () => {
  return (
    <div>
      <h1 style={{color: "purple"}}>Contects Component</h1>
      <Link to={"/about"}>Go Contacts</Link> 
    </div>
  );
};

export default Contects;