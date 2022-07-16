import React, {useState}from 'react';
import './fetchapi.css';


const FetchApi = () => {
// creating state variable store fetch api data
let [coin, setCoins] = useState([])

   // Fetching api only click button
const getData = () => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
          .then(response=>{
            return response.json() // so that we can parse response as json (a format the computer can uderstand)
          })
          .then(response=>{
              console.log('Got back response from api. Data is ->', response);
              setCoins(response);
          })
          // catch error for me
          .catch(err=>{
            console.log(err, 'This only for developer info')
          })
      }
  return (
    <div>
        <button onClick={getData}>Click me to fetch API</button>
        {
            coin.map((coinObj, index) =>{
              return(
                <div key={index} className='api'>
                  <div>
                    <h3>{coinObj.name}{coinObj.id}</h3>
                    <p>Price: {coinObj.current_price}</p>
                    <img src={coinObj.image} className='imgs' style={{backgroundColor: 'purple'}}/>
                  </div>
                </div>
              )
            })
          
        }
    </div>
  );
};

export default FetchApi;