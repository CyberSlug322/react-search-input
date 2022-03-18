import './App.css';
import ExtendedSearch from './ExtendedSearch';
import { SearchMode } from './modes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ExtendedSearch mode = {SearchMode.MODE_AFTER_ENTER_PRESSED}/>
        <ExtendedSearch mode = {SearchMode.MODE_AFTER_STOP_TYPING}/>
        <ExtendedSearch mode = {SearchMode.MODE_IMMEDIATE}/>
      </header>
    </div>
  );
}

export default App;