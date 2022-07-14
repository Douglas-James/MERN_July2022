import React, {useState} from 'react';


const Form = (props) => {
  // need to now about props so i can change it,
  const {list, setList} = props;

  // need to track and make changes 
  const [input, setInput] = useState('');
  console.log(input)

  // setinput
  const onChange = (e) =>{
    setInput(e.target.value);
  }
  

  // working with form submited
  const taskSubmitted = (e) => {
    e.preventDefault();
    let task = {
      name: input,
      finished: false,
    };
    setList([...list, task]);
    e.target.value = '';
  }
  return (
    <div>
        <form onSubmit={taskSubmitted}>
            <input type="text" name='task' value={input} onChange={onChange}/>
            <input type="submit" value="Add" />
        </form>
    </div>
  );
};

export default Form;