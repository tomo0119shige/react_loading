import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <big>
          Now Loading<span className="Loading-dot">.</span><span className="Loading-dot">.</span><span className="Loading-dot">.</span>
        </big>
      </header>
    </div>
  );
}

export default App;
