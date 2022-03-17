import { useRef } from 'react'
import { searchMode } from './modes'

function SearchInput({placeholder, mode, onSearch}) {
  const reference = useRef('')
    const handleChange = (e) => {
      if (mode !== searchMode.MODE_IMMEDIATE && mode !== searchMode.MODE_AFTER_STOP_TYPING) return
      if (mode === searchMode.MODE_IMMEDIATE) return onSearch(e.target.value) 
      reference.current && clearTimeout(reference.current)
      reference.current = setTimeout(() => {
        onSearch(e.target.value)
      }, 3000)
    }
    const handleKeyDown = e => {
        if (e.key !== 'Enter' || mode !== searchMode.MODE_AFTER_ENTER_PRESSED)  return
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
