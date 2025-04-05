import shopcard from '../../assets/shop/shopcard.png'
import fotto1 from '../../assets/shop/Pattern.svg'
import fotto2 from '../../assets/shop/Pattern (1).svg'
import fotto3 from '../../assets/shop/Pattern (2).svg'
import fotto4 from '../../assets/shop/Pattern (3).svg'
import React, { useState } from 'react';
import './shopcard.css';
import { FaArrowCircleRight } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addCart } from '../../redux/Createslice';
import { useParams } from 'react-router-dom';
import { Data } from '../data/Data';  
import Product from '../product/Product';
import NewProduct from '../product/NewProduct';

function Shopcard() {
 const { id } = useParams();
 const dispatch = useDispatch();
 const products = Data.find((item) => item.id === parseInt(id));
 const [quantity, setQuantity] = useState(1);
 const [activeTab, setActiveTab] = useState("description");

 const increaseQuantity = () => {
   setQuantity((prev) => prev + 1);
 };

 const decreaseQuantity = () => {
   setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
 };

 const handleTabChange = (tab) => {
   setActiveTab(tab);
 };

 const AddToCart = () => {
   dispatch(addCart({
     id: products.id,
     name: products.name,
     userName: products.userName,
     price: products.price,
     img: products.img,
     stars: 0,
     quantity: quantity,
   }));
 };

 
 return (
   <div className='shopcard'>
     <div className="shopcart">
      <img src={fotto1} className='fotto111'/>
      <img src={fotto2} className='fotto212'/>
      <img src={fotto3} className='fotto313'/>
      <img src={fotto4} className='fotto414'/>
      <h1>Shop Single</h1>
      <img src={shopcard} className='fotoshop' />
    </div>

     <div className="shopcard1">
       <div className='frutss'>
       <h1 className='Millets'>{products.name}</h1>
         <img src={products.img}  />
         </div>
         <div className='frutscard'> 
         <h1>{products.userName}</h1>
         <p className='stur'>⭐⭐⭐⭐⭐</p>
         <div className="prise">
          <p className='oldpris'>$20.00</p>
              <h3>{products.price}</h3>
          </div>
          <p>Simply dummy text of the printing and typesetting industry. Lorem had <br />
           ceased to been the industry's standard dummy text ever since the 1500s,<br />
            when an unknown printer took a galley.</p>
            <div className="buttons">

         
         <div className="quantity-controls">
         <h3>Quantity :</h3>
         <input 
              type="number" 
              value={quantity} 
              readOnly 
            />
         <div className="arrows">
              <button onClick={increaseQuantity}>▲</button>
              <button onClick={decreaseQuantity}>▼</button>
            </div>
         </div>
         <button onClick={AddToCart}  className="add-to-cart">
           <h4>Add To Cart</h4>
           <FaArrowCircleRight />
         </button>
         </div>
         </div>
     </div>

     <div className="shopcard2">
       <div className="content">
         <div className="product-info">
           <button className={`info-button ${activeTab === "description" ? "active" : ""}`} onClick={() => handleTabChange("description")}>
             Product Description
           </button>
           <button className={`info-button ${activeTab === "info" ? "active" : ""}`} onClick={() => handleTabChange("info")}>
             Additional Info
           </button>
         </div>
         <div className="text-content">
           {activeTab === "description" ? (
             <p>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, <br />
               ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple <br />
               sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
           ) : (
             <p>It contains a high concentration of nitrates, which have a blood pressure-lowering effect. This may lead to a reduced risk of heart <br />
               attacks, heart failure, and stroke. It's also rich in Vitamin C which helps in clearing blemishes and evens out your skin tone while giving <br />
               it a natural glow, lowering blood pressure and increasing exercise performance.</p>
           )}
         </div>
       </div>
     </div>

     <h1 className='hh'>Related Products</h1>
     <div className="shopcard3">
       <div className="flowers">
         {Data.slice(0, 4).map((item, index) => (
           <Product key={index} products={item} />
         ))}
       </div>
     </div>
    
   </div>
 );
}

export default Shopcard;
