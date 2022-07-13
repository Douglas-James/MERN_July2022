import React from 'react';


const Groceries = (props) => {
  // this could just as easily come from props
  const groceryList = ['pearl onions', 'banana', 'apple', 'orange']
  console.log(groceryList)
  return (
    <ol>
      {groceryList.map((item, index) => 
      <li key={index}>{item} key {index}</li>)}
    </ol>
  );
};

export default Groceries;