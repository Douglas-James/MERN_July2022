
import React from 'react';

const Box = props => {

  const boxStyle = {
    display: 'inline-block',
    height: `${props.size**3}px`,
    width: `${props.size**3}px`,
    backgroundColor: props.color,
    margin: '0px'
  }

  return (
    <div style={boxStyle}></div>
    );
}

export default Box;