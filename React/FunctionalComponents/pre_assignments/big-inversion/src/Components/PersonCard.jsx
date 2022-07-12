// // write function here
// agecrement = (e) => {
//   this.setState({ age: this.state.age + 1 });
// };
// need useState
import React, {useState} from 'react';
const PersonCard = props => 
{
  let [state , setState] = useState(props.age)
  const agecrement = () => 
  {
      // let state =  setState({ age: props.state.age + 1 });
    console.log(state)
    setState(state+1)
  };
  return (
    <div>
      <h1>{props.lastName},{props.firstName}</h1>
      {state}
      <p>Hair color:{props.hairColor}</p>
      <button onClick={agecrement}>Click to incress Age</button>
    </div>
  );
};

// when button is click increment Age
export default PersonCard;
