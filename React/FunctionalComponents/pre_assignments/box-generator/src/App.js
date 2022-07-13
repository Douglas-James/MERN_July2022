import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import BoxGenerator from './Components/BoxGenerator';

function App() {
  // need to create color and setColor
  let [color, setColor] = useState([]);
  // let [sizBox, setBox] = useState([]);
  // sizBox={sizBox}
  // setBox={setBox}
 
  return (
    <div className="App">
      <BoxGenerator
      color={color}
      setColor= {setColor}
      />
      {

      }
    </div>
  );
}

export default App;
