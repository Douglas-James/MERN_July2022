import logo from './logo.svg';
import './App.css';

import Birthday from './component/BirthdayButton';

function App() {
  return (
    <div className="App">
      <Birthday Name={"Does, Jane"} age={45} description={"Black"} year={'2000/06/05'}></Birthday>
      <Birthday Name={"Smith, John"} age={88} description={"Brown"} year={'2000/06/05'}></Birthday>
    </div>
  );
}

export default App;
