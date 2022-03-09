import React, {useState, useEffect} from "react";
import axios from 'axios';
import Coin from "./Coin";
import './Coin.css'
import CurrentDateTime from "./CurrentData";
import AsyncCSV from "./AsyncCSV";
import Modal from "./Modal";
import './Modal.css'
import CoinBalance from "./CoinBalance";


function App() {
  const [coins , setCoins] = useState([]);
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState({modal1: true})


useEffect(() => {
  axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res => {
    setCoins(res.data)
  }).catch(error => alert('ERROR'))
}, []);

const handleChange = e => {
  setSearch(e.target.value)
}


const filtredCoins = coins.filter(coin => 
  coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <div className="coin-app">
      <div className="coin-search">
          <h1 className="coin-text"> Search a currency </h1>
          <form>
            <input type="text" placeholder="SEARCH" className="coin-input" onChange={handleChange}/>
            <div className="current-data-time">
            < CurrentDateTime  />
            <button className="button_balances" onClick={() => setModal({
              ...modal, modal1: false
            })}>
              Show Balances
            </button>
            </div>
            <Modal 
              isOpened={modal.modal1}
              title={'Balances'}
              onModalClose={() => setModal({...modal, modal1: false})}
              
            >
              <CurrentDateTime/>
              <AsyncCSV/>
              {filtredCoins.map(coin => {
                return <CoinBalance
                key={coin.id}
                name={coin.name} 
                image={coin.image}
                symbol={coin.symbol} 
                balance={coin.high_24h}
              />;
          
            })}
            
            </Modal>
            
          </form>
          
        </div>
        
        {filtredCoins.map(coin => {
          return <Coin
          key={coin.id}
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol} 
          marketcap={coin.market_cap}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          
          />;
          
        })}

      </div>
      
  )
  
}

export default App;
