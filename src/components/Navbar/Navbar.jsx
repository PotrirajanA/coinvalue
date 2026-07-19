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

      <ul>
        <Link to={'/'}><li>Home</li></Link>       
        <Link to={'/'}><li>Features</li></Link>
        <Link to={'/'}><li>Pricing</li></Link>
        <Link to={'/'}><li>Blog</li></Link>
      </ul>

      <div className='nav-right'>
        <select onChange={currencyHandler}>
          <option value="inr">INR</option>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
        </select>

        <button>Sign Up <ArrowUpRightIcon size={18}/></button>
      </div>
    </div>
  )  
}

export default Navbar
