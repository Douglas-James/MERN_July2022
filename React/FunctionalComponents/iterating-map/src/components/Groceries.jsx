import React from 'react';
import './groceries.css'

const Groceries = (props) => {
  // this could just as easily come from props
  const groceryList = ['pearl ', 'banana', 'apple', 'orange', 'more to do', 'pearl ', 'banana', 'apple', 'orange', 'more to do']
  console.log(groceryList)
  return (
    <ul>
      {groceryList.map((item, index) => 
      <li key={index}>{item} key {index}</li>)}
    </ul>
  );
};

export default Groceries;