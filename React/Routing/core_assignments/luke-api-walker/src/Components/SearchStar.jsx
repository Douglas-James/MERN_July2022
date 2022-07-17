import React, {useState}from 'react';
import { useNavigate} from "react-router-dom";
import './SearchStar.css'
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
    <div className='form-div'>
      <form onSubmit={handSubmited}>
          <label htmlFor="search">Search For:</label>
          <select onChange={(e)=>{setSearch(e.target.value)}} className='choice-select' defaultValue={'DEFAULT'}>
            <option value="DEFAULT" disabled  hidden>choice</option>
            <option value="people">People</option>
            <option value="films">Films</option>
            <option value="starships">Starships</option>
            <option value="vehicles">Vehicles</option>
            <option value="species">Species</option>
            <option value="planets">Planets</option>
          </select>
          <label htmlFor="id">ID:</label>
          <input type="number" name="id" onChange={(e)=>{setId(e.target.value)}} value={id} className='id'/>
          <input type="submit" value="Search"  className='search'/>
      </form>
    </div>
  );
};


export default SearchStar;