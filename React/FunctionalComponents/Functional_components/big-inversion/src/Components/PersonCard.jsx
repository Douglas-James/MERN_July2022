// // write function here
// agecrement = (e) => {
//   this.setState({ age: this.state.age + 1 });
// };
import React, {useState} from 'react';
const PersonCard = (props) => 
{
  let [stateAge, stateage] = useState(props.age)
  const agecrement = () => 
  {
      // let state =  setState({ age: props.state.age + 1 });
    stateage(stateAge+1)
  };
  return (
    <div>
      <h1>{props.Name}</h1>
      {stateAge}
      <p>Hair color:{props.description}</p>
      <button onClick={agecrement}>Clik to incress Age</button>
    </div>
  );
};

// when button is click increment Age
export default PersonCard;
