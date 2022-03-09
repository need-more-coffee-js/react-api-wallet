import React from 'react'

const CoinBalance = ({ name, image, symbol, balance}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        
            <div className='coin'>
                
                <img src={image} alt="crypto" />
                <h1>{name}</h1>
                <p className='coin-symbol-modal'>{symbol}</p>
            </div>
            <p className='coin-balance-modal'>
                    Balance: ${balance.toLocaleString()}
                    </p> 
      </div>
    </div>
  )
}

export default CoinBalance