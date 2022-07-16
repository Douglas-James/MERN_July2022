import './App.css'
import Location from './Components/Location';
import {
  Link, Routes, Route
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <p>
          <Link to="/location/seattle">Seattle</Link>
          | 
          <Link to="/location/chicago">Chicago</Link>
          | 
          <Link to="/location/burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </div>
  );
}

export default App;
