import React, { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './NavigationCartButton.module.css';
import CartContext from '../../store/cartContext';

const NavigationCartButton = ({ onClick }) => {
  const {subCartItems} = useContext(CartContext);
  
  const numberOfCartItems = subCartItems.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>장바구니</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default NavigationCartButton;