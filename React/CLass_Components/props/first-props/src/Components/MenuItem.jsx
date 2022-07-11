// class components
import React, { Component } from "react";

class Menuitem extends Component {
  render() {
    return (
      <div className="item">
        <h3>Name: {this.props.dishName}</h3>
        <p>Price: ${this.props.price}</p>
        <p>Description: {this.props.description}</p>
      </div>
    );
  }
}

// export 
export default Menuitem;
