import React, {useEffect, useState} from 'react';
const Example = (props) => {
    const [people, setPeople] = useState([]);
    const [time, setTime] = useState(new Date().toLocaleString());
 
    useEffect(() => {
      const int = setInterval(
        () => setTime(new Date().toLocaleDateString()),
        1000
      )
      console.log('Hello')
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(response => setPeople(response.results))
    }, []);
    return (
        <div>
            {people.length > 0 && people.map((person, index)=>{
                return (<div key={index}>{person.name}</div>)
            })}
            This just 
            current Date: {time}
        </div>
    );
}
export default Example;

