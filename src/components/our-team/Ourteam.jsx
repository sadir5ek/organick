import React from 'react'
import './ourteam.css'
import { cart } from './Card';

import surot1 from '../../assets/ourteam/Banner(3).svg'
import surot2 from '../../assets/About/Team.svg'
function Ourteam() {
  return (
    <div className='container'>
     <img src={surot1} className='surot1' />
     <div className="team">
      
      <div className='surot-cards-textt'>
        <img src={surot2} alt="" />
     <h1>Our Organic Experts</h1>
     <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's  <br /> standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
     </div>
   <div className='cartt' >   
      {cart.map((item) => (
       <div key={item.id} className='surot-card'>
         <img src={item.image} alt={item.name}  className='surot-card-image'/>
         <h2>{item.name}</h2>
         <p>{item.profession}</p>
        
          <a href="https://www.facebook.com/?locale=ru_RU"><img src={item.fbook} className='fb' /></a>
         <a href="https://x.com/i/flow/login?redirect_after_login=%2Fexplore"> <img src={item.tviter} className='tv' /></a>
       </div>
     ))}
    </div>
      </div>
    </div>
  )
}

export default Ourteam
