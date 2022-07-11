// class components
import React, { Component } from "react";

class Menuitem extends Component {
  render() {
    return (
      <div className="item">
        <h1>Dojo Dinner Menu</h1>
        <h3>Basil Calamari- Thai Style</h3>
        <p>Price: $12.00</p>
        <p>Description: its friend sequid with some basil and thai spices</p>
      </div>
    );
  }
}

// export 
export default Menuitem;
