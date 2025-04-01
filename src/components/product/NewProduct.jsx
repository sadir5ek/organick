import React from 'react';
import { useDispatch } from 'react-redux';
import './product.css';
import { addCart } from '../../redux/Createslice';
import { Link } from 'react-router-dom';

const NewProduct = ({ products }) => {
  const dispatch = useDispatch();

  if (!products) {
    return <p>Продукт табылган жок</p>;
  }

  const AddToCart = () => {
    dispatch(addCart({
      id: products.id,
      name: products.name,
      userName: products.userName,
      price: products.price,
      img: products.img
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
      <Link to="/shopcard/:id">
      <div className="new-pro-img">
        {products.img ? <img src={products.img} alt={products.name} /> : <p>No Image</p>}
      </div>
      
      <div className="new-pro-title">
        <h1>{products.userName}</h1>
        <div></div>
      </div>
      <div className="new-pro-text">
        <h5>{products.oldPrice}</h5>
        <p>${products.price}</p>
        {products.star ? <img src={products.star} alt="Rating" /> : <h4>⭐⭐⭐</h4>}
      </div>
      </Link>
    </div>
    </div>
   
  );
}

export default NewProduct;
