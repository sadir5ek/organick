import React from 'react'
import './card.css'
import { useSelector } from 'react-redux'


 function Card() {
  const {cartItem} =useSelector((state) => state.fruts);
  return (
    <div className='card container'>
      <div className="basket">
        {
          cartItem.map( (item) => (
            <div className="card-product">
              <div className="card-block">
                <img src={item.img} className='cardImg' />
                <p>{item.userName}</p>
              </div>
              <p>{item.price}</p>
              <input type="number" placeholder='0' />
              <p>{item.oldPrice} </p>
            </div>
          ) )
        }
      </div>
    </div>
  )
}

 export default Card