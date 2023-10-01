import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../../store/cartActions';
import ModuleItemForm from './ModuleItemForm';
import classes from './ModuleItem.module.css';

const ModuleItem = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (amount) => {
    const newItem = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };
    dispatch(addItemToCart(newItem));
  };

  return (
    <li className={classes.module}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.price}>{props.price}$</div>
        <div className={classes.quantity}>Available quantity: {props.quantity}</div>
      </div>
      <div>
        <ModuleItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ModuleItem;