// class Component
import React, { Component } from "react";





class Birthday extends Component {
  render() {
    return (
      <div className="item">
        <h1>{this.props.Name}</h1>
        <p>Age: {this.props.Age}</p>
        <p>Hair color:{this.props.description}</p>
      </div>
    );
  }
}

export default Birthday;
