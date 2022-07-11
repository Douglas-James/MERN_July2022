// class components
import React, { Component } from "react";

class Propup extends Component {
  render() {
    return (
      <div className="item">
        <h1>Name: {this.props.Name}</h1>
        <p>age: {this.props.Age}</p>
        <p>Hair Color:{this.props.description}</p>
      </div>
    );
  }
}

// export
export default Propup;
