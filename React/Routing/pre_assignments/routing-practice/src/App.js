import './App.css'
import {
  Link, Routes, Route
} from 'react-router-dom';
import Home from './Components/Home';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/:input" element={<Home />} />
          <Route exact path="/:input/:color/:background" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
