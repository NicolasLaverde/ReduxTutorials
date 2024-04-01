import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiSliceActions } from '../../store/store';

const CartButton = (props) => {

  const dispatch = useDispatch()
  const {totalQuantity} = useSelector(state => state.cart)
  const handleClick = () => {
    dispatch(uiSliceActions.toggleShoppingCart())
  }
  return (
    <button className={classes.button} onClick={handleClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
