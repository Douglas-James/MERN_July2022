import logo from './logo.svg';
import './App.css';

import Birthday from './component/BirthdayButton';

function App() {
  return (
    <div className="App">
      <Birthday Name={"Does, Jane"} Age={45} description={"Black"}></Birthday>
      <Birthday Name={"Smith, John"} Age={88} description={"Brown"}></Birthday>
    </div>
  );
}

export default App;
