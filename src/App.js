import Calculator from './components/Calculator';
import './App.css';
import data from'./data'
function App() {
  return (
    <div className="App">
     <Calculator values={data}></Calculator>
    </div>
  );
}

export default App;
