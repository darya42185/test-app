import { useSelector, useDispatch } from 'react-redux';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import {addItemToCart, removeItemFromCart} from '../../store/cartActions'

const Cart = props => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items);
    const totalAmount = useSelector((state) => state.totalAmount.toFixed(2));

    const hasItems = items.length > 0;

    const cartItemRemoveHandler = id => {
        dispatch(removeItemFromCart(id));
    };

    const cartItemAddHandler = item => {
        dispatch(addItemToCart({...item, amount: 1}));
    };

    const cartItems = <ul className={classes['cart-items']}>
        {items.map(item => (
            <CartItem 
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))}</ul>

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button 
                    className={classes['button--alt']}
                    onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart;