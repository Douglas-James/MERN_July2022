import {useState} from 'react';
import './App.css';
import Dashboard from './Compents/Dashboard';
import UserProfile from './Compents/UserProfile';
import { UserProvider } from './Context/Mycontext';


function App(props) {
  const [user, setUser] = useState({name: 'James'});
  return (
    <UserProvider>
    <div className="App">
      <header>This is our nav  {user.name}</header>
      {/* <Dashboard user={user}/> */}
      <Dashboard/>
      <UserProfile/>
    </div>
    </UserProvider>
  );
}

export default App;
