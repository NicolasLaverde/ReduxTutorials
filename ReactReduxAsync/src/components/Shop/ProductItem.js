import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { shoppingCartActions } from '../../store/store';

const ProductItem = (props) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch()
  const item = useSelector(state => state.cart.items?.find(item => item.id === id)) 


  const addToCartHandler = () => {
    dispatch(
      shoppingCartActions.addItemToCart({
        id,
        title,
        price,
      })
    );
  };

  const handleRemoveItem = () => {
    dispatch(shoppingCartActions.removeItemFromCart(id))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
          <button
            onClick={handleRemoveItem}
            disabled={!item}
          >
            Remove To Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
