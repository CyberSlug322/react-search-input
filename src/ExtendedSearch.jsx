import SearchInput from './SearchInput';
import {useState} from 'react'
import {technologies} from './tech'
import SearchList from './SearchList';

function ExtendedSearch({mode}) {

  const [searchTerm, setSearchTerm] = useState("");
  const onSearchHandler = (value) => {
      setSearchTerm(value)
      console.log("search happend")
  }

  return (
    <div className="ExtendedSearch"> 
        <SearchInput
        placeholder="Type here to search"
        mode={mode}
        onSearch={onSearchHandler} 
        />
        <SearchList listData={technologies.filter(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))}/>    
    </div>
  );
}

export default ExtendedSearch;
