import logo from './logo.svg';
import './App.css';

import PersonCard from './Components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard Name={"Does, Jane"} age={45} description={"Black"}></PersonCard>
      <PersonCard Name={"Smith, John"} age={88} description="Brown"></PersonCard> 
    </div>
  );
}

export default App;
