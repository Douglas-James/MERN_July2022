// class components
import React, { Component } from "react";

// 
class Menuitem extends Component {
  // declare constructure to override our default constructor so that we can initially set the state object
  constructor(props) {
    // gives us all the functionality of the default constructor that comes with component
    super(props);
    this.state = {
      message: "Welcome to state!",
    };
  }
 // write function here
  newmessage = (e) => {
    this.setState({ message: "New state!" });
  };
  render() {
    return (
      <div className="item">
        <h1>{this.state.message}</h1>
        <h3>Name: {this.props.dishName}</h3>
        <p>Price: ${this.props.price}</p>
        <p>Description: {this.props.description}</p>
        <button onClick={this.newmessage}>Click me for inflation</button>
      </div>
    );
  }
}
// when we click on a button something happens
// the price would increments.

// export
export default Menuitem;
