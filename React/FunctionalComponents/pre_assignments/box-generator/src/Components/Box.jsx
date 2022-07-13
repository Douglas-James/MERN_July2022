import React from "react";

const Box = (props) => {
  const sizBox = 
  {
    height: '35px',
    width: '35px',
    backgroundColor: props.color,
    display: 'inline-block',
  }
  console.log(sizBox)
  return (
    <div style={sizBox}></div>
  );
}
export default Box;