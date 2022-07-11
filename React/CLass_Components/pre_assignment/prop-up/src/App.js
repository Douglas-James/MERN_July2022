import logo from './logo.svg';
import './App.css';
import Propup from './Component/Propup';

function App() {
  return (
    <div className="App">
      <Propup Name={"Doe, Jane"} Age={45} description={"Black"}></Propup>
      <Propup Name={"Smith, John"} Age={88} description={"Brown"}></Propup>
      <Propup Name={"Fillmore, Millard"} Age={50} description={"Brown"}></Propup>
      <Propup Name={"Smith, Mari"} Age={62} description={"Brown"}></Propup>
    </div>
  );
}

export default App;
