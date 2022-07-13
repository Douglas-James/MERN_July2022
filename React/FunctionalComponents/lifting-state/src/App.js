import React, {useState} from 'react';
import './App.css';
import MessageDisplay from './components/MessaeDisplay';
import MessageForm from './components/MessageForm';

function App() {
   // useing the state inside app.js
   const [currentMsg, SetCurrentMsg] = useState('There are no Message')
  
   const youveGotMail = (newMessage) => {
     SetCurrentMsg(newMessage)
   }

  return (
    <div className="App">
      <MessageForm onNewMessage={ youveGotMail}/>
      <MessageDisplay message={ currentMsg}/>
    </div>
  );
}

export default App;
