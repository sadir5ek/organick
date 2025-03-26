 import React from 'react'
 import './product.css'
import { useDispatch } from 'react-redux'
import { addCart } from '../../redux/Createslice'
import { Link } from 'react-router-dom';

function Product({ products }) {
    const dispatch = useDispatch();

    if (!products) {
        return <p>Продукт табылган жок</p>;
    }

    return (
        <div className='produck'>
            <div className='product'>
                <div className="product-card">
             <div className="pro-name">
                 <h3>{products.name}</h3> 
                 <div className='pro-btn' onClick={() => dispatch(addCart({
                     id: products.id,
                     name: products.name,
                     price: products.price,
                     img: products.img
                 }))}>
                    {products.card} 
                 </div>
             </div>
             <Link to={`/shopcard/${products.id}`}>
             <div className="pro-img">
                 {products.img ? <img src={products.img} alt={products.name} /> : <p>No Image</p>}
             </div>
            
             <div className="pro-title">
                 <h1>{products.userName}</h1>
                 <div></div>
             </div>
             <div className="pro-text">
                 <h5>{products.oldPrice}</h5>
                 <p>${products.price}</p>
                 {products.star ? <img src={products.star} alt="Rating" /> : <p>⭐⭐⭐</p>}
                    </div>
                    </Link>
                </div>
                
        
            </div>
        </div>
    );
}

export default Product;
