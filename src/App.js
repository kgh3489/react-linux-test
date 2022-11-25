import logo from './logo.svg';
import './App.css';
import PrintMyName from './component/PrintMyName';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrintMyName name="크리스티아누 호날두1"></PrintMyName>
        <PrintMyName name="크리스티아누 호날두2"></PrintMyName>
      </header>
    </div>
  );
}

export default App;
