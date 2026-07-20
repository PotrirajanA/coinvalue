import React, { useContext } from 'react'
import './Navbar.css'
import { ArrowUpRightIcon } from 'lucide-react'
import { coinContext } from '../../context/CoinContext'
import {Link} from "react-router-dom";

const Navbar = () => {

  const{setCurrency} = useContext(coinContext);

  const currencyHandler = (e)=>{
    switch(e.target.value){
      case "inr":{
        setCurrency({name: "inr", symbol:"₹"});
        break;
      }
      case "usd":{
        setCurrency({name: "usd", symbol:"$"});
        break;
      }
      case "eur":{
        setCurrency({name: "eur", symbol:"€"});
        break;
      }
      default:{
        setCurrency({name: "inr", symbol:"₹"});
        break;
      }
    }
  }
  return (
    <div className='navbar'>
      <Link to={'/'}>
      <h4 className='logo'>Coin<span>Value</span></h4>
      </Link>

      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="inr">INR</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>
      </div>
    </div>
  )  
}

export default Navbar
