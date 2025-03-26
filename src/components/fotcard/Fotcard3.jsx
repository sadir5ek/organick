import React from 'react'
import './fotcard.css'
import fcart from '../../assets/notfound.svg'
import four from '../../assets/404.svg'
import { HiArrowSmRight } from "react-icons/hi";
import { Link } from 'react-router-dom'
import b1 from '../../assets/blog/b1.svg'
import b2 from '../../assets/blog/b2.svg'
import b3 from '../../assets/blog/b3.svg'
import b4 from '../../assets/blog/b4.svg'

function Fotcard3() {
  return (
    <div className='fotcard1'>
            <img src={b1} className='bb1'/>
            <img src={b2} className='bb2'/>
            <img src={b3} className='bb3'/>
            <img src={b4} className='bb4'/>
      <div className="notfound">
      <img src={four} />
      <h1>Page not found</h1>
      <p>The page you are looking for doesn't exist or has been moved</p>
      <Link to="/">
      <button className='Default1'>
      <h3> Go to Homepage</h3>
      <HiArrowSmRight/>
       </button>
       </Link>
      </div>
      <img src={fcart} className='fcart'/>
    </div>
  )
}

export default Fotcard3
