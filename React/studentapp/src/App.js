import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Student Management Portal</h1>
        <hr style={{ width: '80%', borderColor: '#61dafb' }} />
        <Home />
        <About />
        <Contact />
      </header>
    </div>
  );
}

export default App;
