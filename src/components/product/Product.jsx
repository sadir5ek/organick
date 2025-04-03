
// import React, { useState } from 'react';
// import './product.css';
// import { useDispatch } from 'react-redux';
// import { addCart } from '../../redux/Createslice';
// import { Link } from 'react-router-dom';

// function Product({ products }) {
//     const dispatch = useDispatch();
//     const [isStarred, setIsStarred] = useState([false, false, false]); // Башында баары өчүк

//     if (!products) {
//         return <p>Продукт табылган жок</p>;
//     }

//     const AddToCart = () => {
//         if (products && products.id) {
//             dispatch(addCart({
//                 id: products.id,
//                 name: products.name,
//                 userName: products.userName,
//                 price: products.price,
//                 img: products.img
//             }));
//         } else {
//             console.error('Продукциянын ID жок!');
//         }
//     };

//     const toggleStar = (index) => {
//         const newStars = [...isStarred];
//         newStars[index] = !newStars[index]; 
//         setIsStarred(newStars);
//     };

//     return (
//         <div className='produck'>
//             <div className='product'>
//                 <div className="product-card">
//                     <div className="pro-name">
//                         <h3>{products.name}</h3> 
//                         <div className='pro-btn' onClick={AddToCart}>
//                             {products.card || 'Add to Cart'} 
//                         </div>
//                     </div>
//                     <Link to={`/shopcard/${products.id}`}>
//                         <div className="pro-img">
//                             {products.img ? <img src={products.img} alt={products.name} /> : <p>No Image</p>}
//                         </div>
//                         </Link>
//                         <div className="pro-title">
//                             <h1>{products.userName}</h1>
//                         </div>

//                         <div className="pro-text">
//                             <h5>{products.oldPrice}</h5>
//                             <p>${products.price}</p>
//                             <div className="star-rating">
//                                 {isStarred.map((star, index) => (
//                                     <span 
//                                         key={index} 
//                                         onClick={() => toggleStar(index)}
//                                         style={{ cursor: 'pointer', fontSize: '30px', color: star ? 'gold' : 'gray' }}
//                                     >
//                                         ★
//                                     </span>
//                                 ))}
//                             </div>
//                         </div>
                   
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Product;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './product.css';
import { addCart } from '../../redux/Createslice';
import { Link } from 'react-router-dom';

const Product = ({ products }) => {
  const dispatch = useDispatch();
  const [stars, setStars] = useState([false, false, false]); // Жылдыздардын баштапкы абалы

  if (!products) {
    return <p>Продукт табылган жок</p>;
  }

  const handleStarClick = (index) => {
    setStars((prevStars) => {
      const updatedStars = prevStars.map((star, i) => (i <= index ? true : false));
      return updatedStars;
    });
  };

  const AddToCart = () => {
    const selectedStars = stars.filter((star) => star).length; // Канча жылдыз жандырылганын эсептөө
    dispatch(addCart({
      id: products.id,
      name: products.name,
      userName: products.userName,
      price: products.price,
      img: products.img,
      stars: selectedStars, // Redux'ка жылдыз санын сактоо
    }));
  };

  return (
    <div className="produck">
      <div className="product">
        <div className="product-card">
          <div className="pro-name">
            <h3>{products.name}</h3>
            <div className="pro-btn" onClick={AddToCart}>
              {products.card || 'Add to Cart'}
            </div>
          </div>
          <Link to={`/shopcard/${products.id}`}>
            <div className="pro-img">
              {products.img ? <img src={products.img} alt={products.name} /> : <p>No Image</p>}
            </div>
            </Link>
            <div className="pro-title">
              <h1>{products.userName}</h1>
            </div>
            <div className="star-pro">
            <div className="pro-text">
              <h5>{products.oldPrice}</h5>
              <p>${products.price}</p>
            </div>
          
          <div className="star-rating">
            {[0, 1, 2].map((index) => (
              <span 
                key={index}
                onClick={() => handleStarClick(index)}
                style={{ cursor: 'pointer', fontSize: '30px', color: stars[index] ? 'gold' : 'gray' }}
              >
                ★
              </span>
            ))}
          </div>
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default Product;
