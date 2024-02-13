import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import About from "./About.js";
function App() {
  return (
    
    <div className="App">
       <link rel="icon" href="./public/favicon.ico" />
      <header className="App-header">
      <nav>
          <ul>
            <li>
              <a href="./">Home</a>

            </li>
            <li>
              <a href="./About">About</a>
            </li>
          </ul>
        </nav>
        



      </header>
      <Button variant="primary">Yeet</Button>{' '}
    </div>
  );
}

export default App;

