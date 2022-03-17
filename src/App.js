import './App.css';
import ExtendedSearch from './ExtendedSearch';
import { searchMode  } from './modes';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <ExtendedSearch mode = {searchMode.MODE_AFTER_ENTER_PRESSED}/>
        <ExtendedSearch mode = {searchMode.MODE_AFTER_STOP_TYPING}/>
        <ExtendedSearch mode = {searchMode.MODE_IMMEDIATE}/>
      </header>
    </div>
  );
}

export default App;