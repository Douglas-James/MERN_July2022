import logo from './logo.svg';
import './App.css';

import PersonCard from './Components/PersonCard';
function App() {
  return (
    <div className="App">
      <PersonCard firstName={"Jane"} lastName={"Does"} age={45} hairColor={"Black"}></PersonCard>
      <PersonCard firstName={"John"}lastName={"Smith"} age={88} hairColor={"Brown"}></PersonCard>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} HairColor={"Black"}></PersonCard>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} HairColor={"Black"}></PersonCard>
    </div>
  );
}

export default App;
