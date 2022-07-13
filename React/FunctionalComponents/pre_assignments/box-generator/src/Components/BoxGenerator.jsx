import React, {useState} from "react";
import Box from "./Box";


const BoxGenerator = (props) =>
{
  // write let or const
    let {color, setColor} = props;
    // let {sizeBox, setBox} = props;
    console.log(color, setColor);
    // console.log(sizeBox, setBox);

    // write functions
    const createBox = (e) => {
      e.preventDefault();
      setColor(color)
      console.log(setColor)
    }
    

    return (
      <form onSubmit={createBox}>
        <label htmlFor="color">Color</label>
        <input type="text" onChange={(e)=>{setColor(e.target.value);}}/>
        <input type="submit" value="Add" />
      </form>
    );
}
export  default BoxGenerator;