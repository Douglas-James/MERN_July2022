import React, {useState} from 'react';

const Tod = (props) => {
  // would get props for to do list
  const {task, index, setList, list} = props;

  console.log(setList)
  // onclick do this deletes
  const onClick = () => {
    const newList = () => list.filter((task) => list.indexOf(task) !== index);
    setList(newList);
  };

  // onchanges do this
  const onChange = (e) => {
    list[index].finsihed = !list[index].finsihed;
    setList([...list]);
  }


  return (
    <div>
      <h1>{task.name}</h1>
      <div>
          <h5 style={{textDecorationLine: task.finsihed? 'line-through' : 'none'}}>Finished?</h5>
          <input type="checkbox"  onChange={onChange} name='' checked={task.finsihed}/>
          <input type="submit" value="Delet" onClick={onClick}/>
      </div>
    </div>
  );
};
export default Tod;