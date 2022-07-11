# Class_components quick note
class compentsare like javascript./ accept arbitrary is(called'props') and return React elelemts

folder Component
file SomeClassComponent.jsx
import React, { Component } from 'react';
    
    
class SomeClassComponent extends Component {
    render() {
        return <div>This is our first class component.</div>;
    }
}
    
export default SomeClassComponent;





# Class Components
1.Have a name starting with capital letter.\
2.Extend React.Component.\
3.Render() method that return jsx or React.createElement().\





# Props
genral work in src 
folder.\Components

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


.\
<!-- App.js
import logo from './logo.svg';
import './App.css';
import Menuitem from './Components/MenuItem';
function App() {
  return (
    <div className="App">
      <h1>Dojo Dinner Menu</h1>
      <Menuitem
        dishName={"Basile Calamari-Thai"}
        price={12.0}
        description={"Fried sequid tho"}
      ></Menuitem>
      <Menuitem
        dishName={"Strogonoff"}
        price={15.0}
        description={"Pasta tho"}
      ></Menuitem>
      <Menuitem
        dishName={"Buffalo Wings"}
        price={8.0}
        description={'Its fried sequid with basil and Thai spices'}
      ></Menuitem>
    </div>
  );
} -->

export default App;









# Childers





# Synthetic Events








# State






# lifecycle Methods








# Style



# Css in Jas







# useRef
