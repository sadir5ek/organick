import React from 'react'
import { Data } from '../data/Data';
import Product from '../product/Product';
import './shop.css'
import shop from '../../assets/shop/shop.png'
import fotto1 from '../../assets/shop/Pattern.svg'
import fotto2 from '../../assets/shop/Pattern (1).svg'
import fotto3 from '../../assets/shop/Pattern (2).svg'
import fotto4 from '../../assets/shop/Pattern (3).svg'

function Shop() {
  return (
    <div className='shop'>
      <div className="shop1">
        <img src={fotto1} className='fotto1'/>
        <img src={fotto2} className='fotto2'/>
        <img src={fotto3} className='fotto3'/>
        <img src={fotto4} className='fotto4'/>
        <h1>Shop</h1>
        <img src={shop} />
      </div>
      <div className="shop2">
      <div className="flowerss">
              {Data.map((item, index) => (
                <Product key={index} products={item} />
              ))}
            </div>
      </div>
    </div>
  )
}

export default Shop

