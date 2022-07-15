import React, {useState} from 'react';
import './todstyle.css'
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
      <div className='container'>
          {
            task.finsihed === true?  <input type="submit" value="Delet" onClick={onClick} className='btn'/> :  <p style={{textDecorationLine: task.finsihed? 'line-through' : 'none'}}>{task.name}: is it finished?</p>
          }
          <input type="checkbox"  onChange={onChange} name='' checked={task.finsihed}/> 
      </div>
    </div>
  );
};
export default Tod;