// class Component
import React, { Component } from "react";



class Birthday extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {
      age: this.props.age 
    };
    this.year = {
        year: this.props.year
    }
  }
  // write function here
  agecrement = (e) => {
    this.setState({age: this.state.age+1});
  }
  render() {
    return (
      <div className="item">
        <h1>{this.props.Name}</h1>
        <p>Age: {this.state.age}</p>
        <p>Hair color:{this.props.description}</p>
        <p>Year: {this.year.year}</p> 
        <button onClick={this.agecrement}>Click to incress Age</button>
      </div>
    );
  }
}

// when button is click increment Age

export default Birthday;
