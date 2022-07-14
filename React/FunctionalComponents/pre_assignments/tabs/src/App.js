import './App.css';
import Tab from './Components/Tab';
function App() {
  return (
    <div className="App">
        <Tab selectTab={[
          {label: 'Tab 1', content: 'Tab 1 content is showing here'},
          {label: 'Tab 2', content: 'Tab 2 content is showing here'},
          {label: 'Tab 3', content: 'Tab 3 content is showing here'},
        ]}
        />
    </div>
  );
}

export default App;
