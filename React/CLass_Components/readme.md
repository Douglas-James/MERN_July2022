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
genral work in src.\
look inside props.\
fold first-props.\
 we use props all the time to pass data down from component to component






# Childers
Components can also have children. Children of components are those element(s)/component(s) that are within the two "tags" of JSX elements.
more info follow the childern folder.\



# Synthetic Events
--using camelcase event listeners to button and etc.
--React uses a custom approach to adding event listeners to our elements by wrapping.\
more info follow the synthetic_events folder.\
# State
Note on we pass props to the base constructor:./
and user super(props)
this.state = {name: action}
// adding methods to a class
nameofmethod(e)=>{
  this.usingreact = (nameofstate: newacttion)
}

# lifecycle Methods








# Style



# Css in Jas







# useRef
