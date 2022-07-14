import React, {useState} from 'react';
import './App.css'; 
import Tod from './Components/Tod';
import Form from './Components/Form'
function App() {
  // need set list and listSet
  const [list, setList] = useState([])
  // console.log(listSet)
  return (
    <div className="App">
      <h1>Create A Task</h1>
      <Form type="text" list={list} setList={setList}/>
      {list.map((task, key) => (<Tod key={key} task={task} setList={setList} index={key} list={list}/>))
      }
    </div>
  );
}
export default App;
