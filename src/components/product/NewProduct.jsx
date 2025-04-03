// import React from 'react';
// import { useDispatch } from 'react-redux';
// import './product.css';
// import { addCart } from '../../redux/Createslice';
// import { Link } from 'react-router-dom';

// const NewProduct = ({ products }) => {
//   const dispatch = useDispatch();

//   if (!products) {
//     return <p>Продукт табылган жок</p>;
//   }

//   const AddToCart = () => {
//     dispatch(addCart({
//       id: products.id,
//       name: products.name,
//       userName: products.userName,
//       price: products.price,
//       img: products.img
//     }));
//   };

//   return (
//     <div className="new-product">
//       <div className="new-product-card">
//       <div className="new-pro-name">
//         <h3>{products.name}</h3>
//         <div className="new-pro-btn" onClick={AddToCart}>
//           {products.card || 'Add to Cart'}
//         </div>
//       </div>
//       <Link to="/shopcard/:id">
//       <div className="new-pro-img">
//         {products.img ? <img src={products.img} alt={products.name} /> : <p>No Image</p>}
//       </div>
      
//       <div className="new-pro-title">
//         <h1>{products.userName}</h1>
//         <div></div>
//       </div>
//       <div className="new-pro-text">
//         <h5>{products.oldPrice}</h5>
//         <p>${products.price}</p>
//         {products.star ? <img src={products.star} alt="Rating" /> : <h4>⭐⭐⭐</h4>}
//       </div>
//       </Link>
//     </div>
//     </div>
   
//   );
// }

// export default NewProduct;

// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import './product.css';
// import { addCart } from '../../redux/Createslice';
// import { Link } from 'react-router-dom';

// const NewProduct = ({ products }) => {
//   const dispatch = useDispatch();
//   const [isStarred, setIsStarred] = useState([false, false, false]); // Башында жылдыздар өчүк

//   if (!products) {
//     return <p>Продукт табылган жок</p>;
//   }

//   const AddToCart = () => {
//     dispatch(addCart({
//       id: products.id,
//       name: products.name,
//       userName: products.userName,
//       price: products.price,
//       img: products.img
//     }));
//   };

//   // Жылдыз басылганда анын абалын өзгөртүү
//   const toggleStar = (index) => {
//     const newStars = [...isStarred];
//     newStars[index] = !newStars[index]; // Жанып же өчүп өзгөртөт
//     setIsStarred(newStars);
//   };

//   return (
//     <div className="new-product">
//       <div className="new-product-card">
//         <div className="new-pro-name">
//           <h3>{products.name}</h3>
//           <div className="new-pro-btn" onClick={AddToCart}>
//             {products.card || 'Add to Cart'}
//           </div>
//         </div>
        
//         <Link to={`/shopcard/${products.id}`}>
//           <div className="new-pro-img">
//             {products.img ? <img src={products.img} alt={products.name} /> : <p>No Image</p>}
//           </div>
//           </Link>
//           <div className="new-pro-title">
//             <h1>{products.userName}</h1>
//           </div>

//           <div className="new-pro-text">
//             <h5>{products.oldPrice}</h5>
//             <p>${products.price}</p>
            
//             {/* Жылдыздар (Башында өчүк, басканда жанат) */}
//             <div className="star-rating">
//               {isStarred.map((star, index) => (
//                 <span 
//                   key={index} 
//                   onClick={() => toggleStar(index)}
//                   style={{ cursor: 'pointer', fontSize: '30px', color: star ? 'gold' : 'gray' }}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>
//           </div>
       
//       </div>
//     </div>
//   );
// }

// export default NewProduct;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './product.css';
import { addCart } from '../../redux/Createslice';
import { Link } from 'react-router-dom';

const NewProduct = ({ products }) => {
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
    <div className="new-product">
      <div className="new-product-card">
        <div className="new-pro-name">
          <h3>{products.name}</h3>
          <div className="new-pro-btn" onClick={AddToCart}>
            {products.card || 'Add to Cart'}
          </div>
        </div>
        
        <Link to={`/shopcard/${products.id}`}>
          <div className="new-pro-img">
            {products.img ? <img src={products.img} alt={products.name} /> : <p>No Image</p>}
          </div>
        </Link>

        <div className="new-pro-title">
          <h1>{products.userName}</h1>
        </div>

        <div className="new-pro-text">
          <h5>{products.oldPrice}</h5>
          <p>${products.price}</p>

          {/* Жылдыздар */}
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
  );
}

export default NewProduct;
