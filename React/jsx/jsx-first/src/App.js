import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Top Self Development Books</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Main Lesson</th>
          </tr>
          <tr>
              <td>Power of Now</td>
              <td>Eckhart Tolle</td>
              <td>Be Present so you can access all your best stuff</td>
            </tr>
            <tr>
              <td>IT</td>
              <td>Stephen King</td>
              <td>To not mess with spiders</td>
            </tr>
            <tr>
              <td>Empire state of Mind</td>
              <td>Jay-z</td>
              <td>How Jay-z overcomeobstacles to become a bllionaire</td>
            </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
