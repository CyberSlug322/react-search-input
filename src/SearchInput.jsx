import { useRef } from 'react'
import { SearchMode } from './modes'

function SearchInput({placeholder, mode, onSearch}) {
  const reference = useRef('')
    const handleChange = (e) => {
      if (mode !== SearchMode.MODE_IMMEDIATE && mode !== SearchMode.MODE_AFTER_STOP_TYPING) return
      if (mode === SearchMode.MODE_IMMEDIATE) return onSearch(e.target.value) 
      reference.current && clearTimeout(reference.current)
      reference.current = setTimeout(() => {
        onSearch(e.target.value)
      }, 3000)
    }
    const handleKeyDown = e => {
        if (e.key !== 'Enter' || mode !== SearchMode.MODE_AFTER_ENTER_PRESSED)  return
        onSearch(e.target.value)
         
    }

  return (
    <div className="SearchInput">      
        <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        />        
        
    </div>
  );
}

export default SearchInput;
