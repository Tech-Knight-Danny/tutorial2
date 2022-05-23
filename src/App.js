import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><b>Name: Benny Daniel Tharigopala</b>        
        </p>
        <p><b>Banner#: B00899629</b>        
        </p>
        <p><b>CSCI 5709 - Tutorial 2</b>        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
