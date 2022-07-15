import React, {useState}from 'react';

const Form = (props) => {
  const [name, setNames] = useState('')
  console.log(name)

  // array called store evenry name that gets submited
  const [newName, setName] = useState([])
  console.log(newName)
  // for submite handler
  const submitedHandler = (e) => {
    e.preventDefault(); // this will prevent the form submission from reloading the page
    console.log('You have your form')
    // put name into an object 
    let nameObject = {name}; 
    setName([...newName,nameObject]) 
    console.log()
  }

  return (
    <div>
      <h1>Hello: {name}!</h1>
      <form onSubmit={submitedHandler}>
          <input type='text' onChange={(e) => setNames(e.target.value)} />
          <input type="submit" value="submit" />
      </form>
     <hr/>
     {/* using it mape newName */}
     {
       newName.map((name, index)=>{
         return(
          <div key={index}>
             <p>{name.name}</p>
          </div>
         )
       })
     }
    </div>
    
  );
};


export default Form;