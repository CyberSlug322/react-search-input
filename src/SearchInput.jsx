import React, {useState, useEffect} from "react";
import { technologies } from "./tech";


function SearchInput({placeholder, mode, onSearch,listData}) {
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
    setSearchTerm(event.target.value);
  }

    const handleKeyDown = event => {
        if (event.key !== 'Enter' || mode !== "AfterEnterIsPressed")  return
        onSearch(technologies, searchTerm)
         
    }

  useEffect(() => {
    if (mode === "Immediate") {
        onSearch(technologies, searchTerm)
    }
    if (mode === "AfterStopTyping") {
        const delayDebounceFn = setTimeout(() => {
            onSearch(technologies, searchTerm)
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
         {listData?.map(item => (
          <li>{item}</li>
        ))}
        </ul>
    </div>
  );
}

export default SearchInput;
