import './App.css';
import SearchInput from './SearchInput';


function App() {

  const SearchInputModes = {
    Immediate: "Immediate",
    AfterEnter: "AfterEnterIsPressed",
    AfterStopTyping: "AfterStopTyping"
    }

  const onSearchHandler = (technologies, searchTerm) => {
    return technologies.filter(tech =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput
        placeholder="Search"
        mode={SearchInputModes.Immediate}
        onSearch={onSearchHandler}
        />
      </header>
    </div>
  );
}

export default App;
