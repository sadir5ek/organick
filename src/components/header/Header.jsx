import React from 'react'
import './header.css'
import logo from '../../assets/Logo (2).svg'
import { Link, useNavigate } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';

function Header() {

  const { cartItem} = useSelector( (state) => state.fruts)
 console.log(cartItem);
 
    const navigate = useNavigate(); 
  
    const handleSelectChange = (event) => {
      navigate(event.target.value); 
    };
  
    return (
      <div className='header container'>
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1 className='organick'>Organick</h1>
        </div>
        <div className="header-left">
          <ul className='id'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
              <select className='select' onChange={handleSelectChange}>
                <option value="/blog">Blog</option>
                <option value="/our-team">Our-team</option>
                <option value="/portfolio">Portfolio</option>
                <option value="/service-single">Service-single</option>
                <option value="/services">Services</option>
              </select>
            </li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </div>
        <div className="">
          <Link to="cardPage" className='header-right'>
            <div className="icon">
              <CiShoppingCart className='icon-react' />
            </div>
            <div className="count"> Card {cartItem.length} </div>
          </Link> 
        </div>
      </div>
    )
  
}

export default Header
