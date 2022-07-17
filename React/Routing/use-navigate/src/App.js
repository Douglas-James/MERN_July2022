import './App.css';
import React from 'react';
import Survey from './Components/Survey';
import {
  link, Routes, Route, useParams
} from 'react-router-dom';
import Submited from './Components/Submited';

function App(props) {
  const {name, comment} = props;
  console.log(name)
  return (
    <div className="App">
    <Routes>
        <Route path="/results" element={<Survey/>}/>
        <Route path='/' element={<Submited/>}/>
      </Routes>
    </div>
  );
}

export default App;
