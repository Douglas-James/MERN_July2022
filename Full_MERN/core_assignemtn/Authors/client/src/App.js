import './App.css';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import AdAuthors from './Components/AdAuthors';
import ShowallAuthors from './Components/ShowallAuthors';
import EditAuthors from './Components/EditAuthors';

function App() {
  return (
    <div className="App container">
      <Routes>
          
          {/* show all the product forms */}
          <Route exact path='/' element={<>
            <Link to='/add/authors'>Add Authors</Link>
            <p>We Have quotes by:</p>
            <ShowallAuthors></ShowallAuthors></>}>
          </Route>
          <Route exact path="/edit/:id" element={<EditAuthors/>}/>  
          <Route exact path="/add/authors" element={<AdAuthors/>}/>  
          
      </Routes>
      
    </div>
  );
}

export default App;
