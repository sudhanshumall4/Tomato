import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  const itemCount = cartItems[id] || 0;

  const handleAdd = () => {
    addToCart(id);
  };

  const handleRemove = () => {
    removeFromCart(id);
  };

  return (
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className='food-item-image' src={image} alt={name} />
        {
          itemCount === 0 ? (
            <img
              className='add'
              onClick={handleAdd}
              src={assets.add_icon_white}
              alt="Add"
            />
          ) : (
            <div className='food-item-counter'>
              <img
                onClick={handleRemove}
                src={assets.remove_icon_red}
                alt="Remove"
              />
              <p>{itemCount}</p>
              <img
                onClick={handleAdd}
                src={assets.add_icon_green}
                alt="Add"
              />
            </div>
          )
        }
      </div>

      <div className="food-item-info"> 
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">Rs-{price}/-</p>
      </div>
    </div>
  );
};

export default FoodItem;
