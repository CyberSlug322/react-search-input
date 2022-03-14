import './App.css';
import SearchInput from './SearchInput';
import {useState} from 'react'


function App() {
  const [filteredData, setFilteredData] = useState('')
  const SearchInputModes = {
    Immediate: "Immediate",
    AfterEnter: "AfterEnterIsPressed",
    AfterStopTyping: "AfterStopTyping"
    }

  const onSearchHandler = (technologies, searchTerm) => {
      const data = technologies.filter(tech =>
      tech.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <SearchInput
        placeholder="Search"
        mode={SearchInputModes.Immediate}
        onSearch={onSearchHandler}
        listData={filteredData}
        >
        </SearchInput>
        
        
      </header>
    </div>
  );
}

export default App;
