import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './product.css'; 
import { addCart } from '../../redux/Createslice';
import { Link } from 'react-router-dom';

const NewProduct = ({ products }) => {
  const dispatch = useDispatch();
  const [stars, setStars] = useState([false, false, false]); 

  if (!products) {
    return <p>Продукт табылган жок</p>;
  }

  const handleStarClick = (index) => {
    setStars((prevStars) => {
      return prevStars.map((_, i) => i <= index);
    });
  };

  const AddToCart = () => {
    const selectedStars = stars.filter(Boolean).length; 
    dispatch(addCart({
      id: products.id,
      name: products.name,
      userName: products.userName,
      price: products.price,
      img: products.img,
      stars: selectedStars, 
      quantity: 1, 
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

        <Link 
          to={`/shopcard/${products.id}`} 
          onClick={() => window.scrollTo(0, 0)} 
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="new-pro-img">
            {products.img ? (
              <img src={products.img} alt={products.name} />
            ) : (
              <p>No Image</p>
            )}
          </div>
        </Link>

        <div className="new-pro-title">
          <h1>{products.userName}</h1>
        </div>

        <div className="new-pro-text">
          {products.oldPrice && <h5 style={{ textDecoration: 'line-through', color: 'gray' }}>${products.oldPrice}</h5>}
          <p>${products.price}</p>

          <div className="star-rating">
            {[0, 1, 2].map((index) => (
              <span 
                key={index} 
                onClick={() => handleStarClick(index)}
                style={{ 
                  cursor: 'pointer', 
                  fontSize: '30px', 
                  color: stars[index] ? 'gold' : 'gray' 
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
