// class components
import React, { Component } from "react";

class Menuitem extends Component {
  render() {
    // write function here

    return (
      <div className="item">
        <h3>Name: {this.props.dishName}</h3>
        <p>Price: ${this.props.price}</p>
        <p>Description: {this.props.description}</p>
        <button onClick={()=> alert('This button has been clicked!')}>Click me for inflation</button>
      </div>
    );
  }
}
// when we click on a button something happens
// the price would increments.

// export
export default Menuitem;
