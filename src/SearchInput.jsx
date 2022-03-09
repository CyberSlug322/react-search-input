import React, {useState, useEffect} from "react";
import { technologies } from "./tech";


function SearchInput({placeholder, mode, onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
    setSearchTerm(event.target.value);
  }

    const handleKeyDown = event => {
        if (event.key === 'Enter' && mode === "AfterEnterIsPressed") {
            const results = onSearch(technologies, searchTerm)
            setSearchResults(results)
          }
    }

  useEffect(() => {
    if (mode === "Immediate") {
        const results = onSearch(technologies, searchTerm)
        setSearchResults(results)
    }
    if (mode === "AfterStopTyping") {
        const delayDebounceFn = setTimeout(() => {
            const results = onSearch(technologies, searchTerm)
            setSearchResults(results)
          }, 3000)
      
          return () => clearTimeout(delayDebounceFn)   
    }
    
  }, [searchTerm, mode]);

  return (
    <div className="SearchInput">      
        <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />        
        <ul>
         {searchResults.map(item => (
          <li>{item}</li>
        ))}
        </ul>
    </div>
  );
}

export default SearchInput;
