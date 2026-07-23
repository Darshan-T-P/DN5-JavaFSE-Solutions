import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore 
        Name="John Doe" 
        School="Springfield High School" 
        Total={420} 
        goal={500} 
      />
    </div>
  );
}

export default App;
