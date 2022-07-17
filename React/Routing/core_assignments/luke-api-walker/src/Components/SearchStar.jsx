import React, {useState}from 'react';
import { useNavigate} from "react-router-dom";
const SearchStar = (props) => {
  // using state track select
  let [search, setSearch] = useState('')
  let [id, setId] = useState('')
  const navigate = useNavigate();
  
  console.log('your id', id)
  console.log('Catagory', search)
  
  // handlding form search
  const handSubmited = (e) => {
    e.preventDefault()
    navigate(`${search}/${id}`);


  }
  

  return (
    <div>
      <form onSubmit={handSubmited}>
          <label htmlFor="search">Search For:</label>
          <select onChange={(e)=>{setSearch(e.target.value)}}>
            <option value="starts" disabled selected>Choice</option>
            <option value="people">people</option>
            <option value="films">films</option>
            <option value="starships">StarShips</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
            <option value="planets">Planets</option>
          </select>
          <label htmlFor="id">ID:</label>
          <input type="number" name="id" onChange={(e)=>{setId(e.target.value)}} value={id} />
          <input type="submit" value="Search" />
      </form>
    </div>
  );
};


export default SearchStar;