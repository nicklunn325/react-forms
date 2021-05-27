import logo from './logo.svg';
import './App.css';
import ControlledForm from './ControlledForm.js'
import UncontrolledForm from './UncontrolledForm.js'


function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React Forms</h2>
        <ControlledForm name="Duke"/>
      </header>
    </div>
  );
}

export default App;
