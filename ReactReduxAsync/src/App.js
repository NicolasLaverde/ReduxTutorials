import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import Notification from './components/UI/notification';
import { sendCartData, fetchCardData } from './reducers/cart-actions';

let isInitial = true;

function App() {

  const { isShowShoppingCart, notification } = useSelector(state => state.ui)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()

  useEffect(() => {
    if(isInitial) {
      dispatch(fetchCardData())
      isInitial = false
      return
    }
  },[dispatch])

  useEffect(() => {
    if(cart.changed) {
      dispatch(sendCartData(cart))
    }
  }, [cart, dispatch])
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {isShowShoppingCart && (
          <Cart />
        )}
        <Products />
      </Layout>
    </>
  );
}

export default App;
