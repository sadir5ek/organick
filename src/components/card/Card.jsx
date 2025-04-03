
// import React, { useEffect } from 'react';
// import './card.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { increaseQuantity, decreaseQuantity, removeCart } from '../../redux/Createslice';

// function Card() {
//   const { cartItem } = useSelector((state) => state.fruts);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     console.log("Updated Cart Items:", cartItem);
//   }, [cartItem]);

//   const handleIncrease = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecrease = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   const handleRemove = (id) => {
//     dispatch(removeCart(id));
//   };

//   // Бааны туура санга айландыруучу функция
//   const cleanPrice = (price) => {
//     if (typeof price === "string") {
//       return parseFloat(price.replace(/[^\d.]/g, "").trim()) || 0;
//     }
//     return price || 0;
//   };

//   // Жалпы сумманы эсептөө
//   const totalAmount = cartItem?.reduce((total, item) => {
//     return total + cleanPrice(item.price) * (item.quantity || 1);
//   }, 0);

//   return (
//     <div className='card container'>
//       <div className="basket">
//         {cartItem.length === 0 ? (
//           <p className="empty-cart"></p>
//         ) : (
//           <>
//             {cartItem.map((item) => (
//               <div key={item.id} className="card-product">
//                 <div className="card-block">
//                   <img src={item.img} className='cardImg' alt={item.name} />
//                   <h1>{item.userName}</h1>
//                 </div>
//                 <p>{cleanPrice(item.price)} ₽</p>
//                 <div className="quantity">
//                   <button onClick={() => handleDecrease(item.id)}>-</button>
//                   <input type="number" value={item.quantity} readOnly min="1" />
//                   <button onClick={() => handleIncrease(item.id)}>+</button>
//                 </div>
//                 <button onClick={() => handleRemove(item.id)} className="remove-btn">
//                   clear
//                 </button>
//               </div>
//             ))}
//             <div className="total-container">
//               <h2 className='total'>Total: {totalAmount} ₽</h2>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Card;



// import React, { useEffect, useState } from 'react';
// import './card.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { increaseQuantity, decreaseQuantity, removeCart } from '../../redux/Createslice';

// function Card() {
//   const { cartItem } = useSelector((state) => state.fruts);
//   const dispatch = useDispatch();
//   const [stars, setStars] = useState({}); // Жылдыздардын абалын сактоо

//   useEffect(() => {
//     console.log("Updated Cart Items:", cartItem);
//   }, [cartItem]);

//   const handleIncrease = (id) => {
//     dispatch(increaseQuantity(id));
//   };

//   const handleDecrease = (id) => {
//     dispatch(decreaseQuantity(id));
//   };

//   const handleRemove = (id) => {
//     dispatch(removeCart(id));
//     setStars((prevStars) => {
//       const updatedStars = { ...prevStars };
//       delete updatedStars[id]; // Продукт өчүрүлгөндө жылдызын да өчүрүү
//       return updatedStars;
//     });
//   };

//   const toggleStar = (productId, index) => {
//     setStars((prevStars) => {
//       const updatedStars = { ...prevStars };
//       if (!updatedStars[productId]) {
//         updatedStars[productId] = [false, false, false]; // Эгер мурда жок болсо, массив түзүү
//       }
//       updatedStars[productId][index] = !updatedStars[productId][index]; // Жылдыз абалын өзгөртүү
//       return updatedStars;
//     });
//   };

//   const cleanPrice = (price) => {
//     if (typeof price === "string") {
//       return parseFloat(price.replace(/[^\d.]/g, "").trim()) || 0;
//     }
//     return price || 0;
//   };

//   const totalAmount = cartItem?.reduce((total, item) => {
//     return total + cleanPrice(item.price) * (item.quantity || 1);
//   }, 0);

//   return (
//     <div className='card container'>
//       <div className="basket">
//         {cartItem.length === 0 ? (
//           <p className="empty-cart">Корзина бош</p>
//         ) : (
//           <>
//             {cartItem.map((item) => (
//               <div key={item.id} className="card-product">
//                 <div className="card-block">
//                   <img src={item.img} className='cardImg' alt={item.name} />
//                   <h1>{item.userName}</h1>
//                 </div>
//                 <p>{cleanPrice(item.price)} ₽</p>

//                 <div className="star-rating">
//                   {[0, 1, 2].map((index) => (
//                     <span 
//                       key={index}
//                       onClick={() => toggleStar(item.id, index)}
//                       style={{ cursor: 'pointer', fontSize: '20px', color: stars[item.id]?.[index] ? 'gold' : 'gray' }}
//                     >
//                       ★
//                     </span>
//                   ))}
//                 </div>

//                 <div className="quantity">
//                   <button onClick={() => handleDecrease(item.id)}>-</button>
//                   <input type="number" value={item.quantity} readOnly min="1" />
//                   <button onClick={() => handleIncrease(item.id)}>+</button>
//                 </div>
//                 <button onClick={() => handleRemove(item.id)} className="remove-btn">
//                   clear
//                 </button>
//               </div>
//             ))}
//             <div className="total-container">
//               <h2 className='total'>Total: {totalAmount} ₽</h2>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Card;







import React, { useEffect } from 'react';
import './card.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeCart } from '../../redux/Createslice';

function Card() {
  const { cartItem } = useSelector((state) => state.fruts);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Updated Cart Items:", cartItem);
  }, [cartItem]);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeCart(id));
  };

  const cleanPrice = (price) => {
    if (typeof price === "string") {
      return parseFloat(price.replace(/[^\d.]/g, "").trim()) || 0;
    }
    return price || 0;
  };

  const totalAmount = cartItem?.reduce((total, item) => {
    return total + cleanPrice(item.price) * (item.quantity || 1);
  }, 0);

  return (
    <div className='card container'>
      <div className="basket">
        {cartItem.length === 0 ? (
          <p className="empty-cart">Корзина бош</p>
        ) : (
          <>
            {cartItem.map((item) => (
              <div key={item.id} className="card-product">
                <div className="card-block">
                  <img src={item.img} className='cardImg' alt={item.name} />
                  <h1>{item.userName}</h1>
                </div>

                {/* Баалар жана жылдыздар бир катарга */}
                <div className="price-star-container">
                  <p className="current-price">{cleanPrice(item.price)} $</p>

                  {/* Жылдыздар */}
                  <div className="star-rating">
                    {[0, 1, 2].map((index) => (
                      <span 
                        key={index}
                        className={index < item.stars ? "gold-star" : "gray-star"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <div className="quantity">
                  <button onClick={() => handleDecrease(item.id)}>-</button>
                  <input type="number" value={item.quantity} readOnly min="1" />
                  <button onClick={() => handleIncrease(item.id)}>+</button>
                </div>
                <button onClick={() => handleRemove(item.id)} className="remove-btn">
                  clear
                </button>
              </div>
            ))}
            <div className="total-container">
              <h2 className='total'>Total: {totalAmount} $</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
