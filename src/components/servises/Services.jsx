import React from 'react'
import './services.css'
import Video  from './Video.jsx'
import { Link } from 'react-router-dom';


import surot1 from '../../assets/servicess/Banner.jpg'
import surot2 from '../../assets/servicess/WhatweGrow.svg'
import surot3 from '../../assets/servicess/MilkBottle.svg'
import surot4 from '../../assets/servicess/OnlineStore.svg'
import surot5 from '../../assets/servicess/Delivery.svg'
import surot6 from '../../assets/servicess/Photo(3).svg'
import surot7 from '../../assets/servicess/2(1).svg'






function Services() {
  return (
    <div className='container'>
        <img src={surot1} className='img1' />
        <div className="block1">
            <img src={surot2} className='surot2' />
            <h1>Better Agriculture for  <br /> Better Future</h1>

            <img src={surot3} alt="" className='surot'  />
            <h4 className='h1i'>Dairy Products</h4>
            <p className='pi'>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptat accusantium doloremqlaudantium. <br /> Sed ut perspiciatis</p>
            <img src={surot4} alt="" className='suroti' />
            <h4 className='h1i'>Dairy Products</h4>
            <p className='pi'>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptat accusantium doloremqlaudantium. <br /> Sed ut perspiciatis</p>
            <img src={surot5} alt="" className='suroti' />
            <h4 className='h1i'>Dairy Products</h4>
            <p className='pi'>Sed ut perspiciatis unde omnis iste natus error <br /> sit voluptat accusantium doloremqlaudantium. <br /> Sed ut perspiciatis</p>
           
           <img src={surot6} className='surot6' />
           <img src={surot7} className='surot7'/>
           <Link to="/service-single" >
           <button className='btn'>Explore More</button>
           </Link>
           <Video/>
       </div>
    </div>
  )
}

export default Services
