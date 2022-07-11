import React, { Component } from "react";
// import css
import './style.css';

// inline style
const btnStyle = {
  backgroundColor: 'red',
  fonstFamily: 'Arial, sans-serif',
  fontWeight: 'bold',
  padding: '30px'
}

class MyNewComponent extends Component {
  render() {
    return (
      <div className="item">
        <h1>{this.props.header}</h1>
          <p style={btnStyle}> inline style</p>
          <p className="import">import style</p>
        {this.props.children}
      </div>
    );
  }
}

export default MyNewComponent;
