import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import Button from "./Button"
import styles from './App.module.css'
import {useState} from 'react'


function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {setCoins(json); setLoading(false)});
  },[])
  const [money, setMoney] = useState(0);
  const [cost , setCost] = useState(0);
  const [result , setResult] = useState(0);
  const onChange = (e) => {
    setMoney(e.target.value);
    console.log(money)
  }
  const getSymbol = (e) =>{
    setCost(e.target.value);
  }
  const calculate =()=>{
    setResult(Math.floor(money / cost))
  }
  return (
    <div>
      <h1>The Coins! ({coins.length})</h1>
      <input type="text" placeholder='how much do you have?' onChange={onChange}/>
      <button  onClick={calculate}>calculate!</button>
      {loading ? <strong>loading..</strong> :
          (<select id="select" onChange={getSymbol}>
            {coins.map(
                (coin)=><option value={coin.quotes.USD.price} key={coin.id}>{coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD</option>)
            }
          </select>)
      }
      <div>you can get {result}</div>
    </div>
  );
}

export default App;
