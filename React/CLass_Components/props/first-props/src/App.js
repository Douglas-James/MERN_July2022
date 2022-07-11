import logo from './logo.svg';
import './App.css';
import Menuitem from './Components/MenuItem';
function App() {
  return (
    <div className="App">
      <h1>Dojo Dinner Menu</h1>
      <Menuitem
        dishName={"Basile Calamari-Thai"}
        price={12.0}
        description={"Fried sequid tho"}
      ></Menuitem>
      <Menuitem
        dishName={"Strogonoff"}
        price={15.0}
        description={"Pasta tho"}
      ></Menuitem>
      <Menuitem
        dishName={"Buffalo Wings"}
        price={8.0}
        description={'Its fried sequid with basil and Thai spices'}
      ></Menuitem>
    </div>
  );
}

export default App;
