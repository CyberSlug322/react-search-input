
function SearchList ({listData}) {
    return (
        <ul>
         {listData?.map((item, pos) => (
          <li key={pos}>{item}</li>
        ))}
        </ul>
    )
}

export default SearchList