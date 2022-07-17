import './App.css';
import SearchStar from './Components/SearchStar';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import DisplayStar from './Components/DisplayStar';
function App() {
  return (
    <div className="App">
      <h1>Luke Api Walker</h1>
        <SearchStar></SearchStar>
        <Routes>
          <Route exact path='/:search/:id' element={<DisplayStar/>}/>
        </Routes>
    </div>
  );
}

export default App;
