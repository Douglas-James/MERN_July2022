
import './App.css';
import Form from './Components/Form';
import AllProducts from './Components/AllProducts';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import OneProduct from './Components/OneProduct';


function App() {
  // automatically update after submitting form
  const [IhaveForm, setHaveForm] = useState(false);
  return (
    <div className="App container">
        <Routes>
          {/* show all the product forms */}
          <Route exact path='/' element={<>
            <Form IhaveForm={IhaveForm} setHaveForm={setHaveForm}></Form>
            <hr />
            <AllProducts IhaveForm={IhaveForm}></AllProducts></>}>
          </Route>
          <Route path="/api/product2/:id" element={<OneProduct/>} />
          {/* <Route exact path="/"  />  */}
      </Routes>
    </div>
  );
}

export default App;
