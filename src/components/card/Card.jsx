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

  return (
    <div className='card container'>
      <div className="basket">
        {cartItem.length === 0 ? (
          <p className="empty-cart"></p>
        ) : (
          cartItem.map((item) => (
            <div key={item.id} className="card-product">
              <div className="card-block">
                <img src={item.img} className='cardImg' alt={item.name} />
                <h1>{item.userName}</h1>
              </div>
              <p>{item.price}</p>

              <div className="quantity">
                <button onClick={() => handleDecrease(item.id)}>-</button>
                <input
                  type="number"
                  value={item.quantity}
                  readOnly
                  min="1"
                />
                <button onClick={() => handleIncrease(item.id)}>+</button>
              </div>

              <button onClick={() => handleRemove(item.id)} className="remove-btn">
                clear
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Card;
