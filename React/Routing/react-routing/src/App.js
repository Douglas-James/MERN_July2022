import React from "react";
import {Routes,Route,Link } from "react-router-dom";
import About from './components/About'
import Home from './components/Home'
import Contects from './components/Contects'


function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/Contacts" element={<Contects />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
    
export default App
