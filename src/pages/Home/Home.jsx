import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import { coinContext } from "../../context/CoinContext";
import{Link} from 'react-router-dom';

const Home = () => {
  const { allCoin, currency } = useContext(coinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const inputHandler = (e)=>{
    setInput(e.target.value);
    if(e.target.value === ""){
      setDisplayCoin(allCoin);
    }
  }

  const searchHandler = async(e)=>{
    e.preventDefault();
    const coins = await allCoin.filter((item)=>{
      return item.name.toLowerCase().includes(input.toLowerCase())
    })
    setDisplayCoin(coins);
  }

  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);
  return (
    <div className="home">
      <div className="hero">
        <h1>
          Largest <br /> Crypto Marketplace{" "}
        </h1>
        <p>
          Welcome to the world's largest cryptocurrency marketplace. Sign up to
          explore more about cryptos.
        </p>
        <form onSubmit={searchHandler}>
          <input type="text" placeholder="Search crypto.." onChange={inputHandler} list="coinList" value={input}/>

          <datalist id='coinList'>
            {allCoin.map((item,index)=>(<option key={index} value={item.name}/>))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto_table">
        <div className="table_layout">
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24H Change</p>
          <p className="market_cap">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <Link to={`/coin/${item.id}`} className="table_layout" key={index}>
            <p>{item.market_cap_rank}</p>

            <div className="coin">
              <img src={item.image} alt={item.name} />
              <p>
                {item.name} - {item.symbol.toUpperCase()}
              </p>
            </div>

            <p>
              {currency.symbol}
              {item.current_price}
            </p>
            <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>{item.price_change_percentage_24h.toFixed(2)}%</p>
            <p className="market_cap">
              {currency.symbol}
              {item.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
