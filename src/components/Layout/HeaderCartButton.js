import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleCartButtonHighlight } from '../../store/cartActions';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.items);

  const numberOfCartItems = cartItems.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${props.isHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (cartItems.length === 0) {
      return;
    }
    props.isHighlighted && dispatch(toggleCartButtonHighlight(true));

    const timer = setTimeout(() => {
      props.isHighlighted && dispatch(toggleCartButtonHighlight(false));
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartItems, dispatch, props.isHighlighted]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;