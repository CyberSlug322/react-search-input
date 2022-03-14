import './App.css';
import ExtendedSearch from './ExtendedSearch';
import { MODE_AFTER_ENTER_PRESSED, MODE_AFTER_STOP_TYPING, MODE_IMMEDIATE  } from './modes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ExtendedSearch mode = {MODE_AFTER_ENTER_PRESSED}/>
        <ExtendedSearch mode = {MODE_AFTER_STOP_TYPING}/>
        <ExtendedSearch mode = {MODE_IMMEDIATE}/>
      </header>
    </div>
  );
}

export default App;