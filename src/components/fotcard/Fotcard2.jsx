import React from 'react'
import './fotcard.css'
import ftf from '../../assets/homeee/Group2.svg'
import ftv from '../../assets/homeee/Group4.svg'
import rose from '../../assets/shop/rose.svg'
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom'


function Fotcard2() {
  return (
    <div className='fotcard1'>
       <div className="fcard1">
              <img src={ftf} />
              <h1>Protected Page</h1>
              <img src={ftv} />
           </div>
           <div className="fotcart2">
            <img src={rose} />
            <div className="Password">
              <p>Password</p>
              <input type="Password" placeholder='Enter Your Password' />
              <Link to="/fotcard3">
              <button className='Default1'>
                <h3>Default Button</h3>
                <HiArrowSmRight/>
                 </button>
              </Link>
          
            </div>
           </div>
           <h1 className='ff'>ff</h1>
    </div>
  )
}

export default Fotcard2
