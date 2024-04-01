import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const {items, totalPrice} = useSelector(state => state.cart)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map(({title, price, quantity, id}) => 
          <CartItem
            key={id}
            item={{
              id,
              title,
              quantity,
              total: price*quantity,
              price
            }}
          />
        )}
      </ul>
      <div> Total price: {totalPrice}</div>
    </Card>
  );
};

export default Cart;
