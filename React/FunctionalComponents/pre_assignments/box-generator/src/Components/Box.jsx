
import React from 'react';

const Box = props => {

  const boxStyle = {
    display: 'inline-block',
    height: `${props.size}px`,
    width: `${props.size}px`,
    backgroundColor: props.color,
    margin: '40px'
  }

  return (
    <div style={boxStyle}></div>
    );
}

export default Box;