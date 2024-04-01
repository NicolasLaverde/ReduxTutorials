import { uiSliceActions, shoppingCartActions } from "../store/store"

export const fetchCardData = () =>{
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch(
                'https://react-redux-async-28ab7-default-rtdb.firebaseio.com/cart.json'
            )

            if(!response.ok) {
                throw new Error('Could not fetch cart data!')
            }

            const data = await response.json()

            return data
        }
        try{
            const cartData = await fetchData()
            dispatch(shoppingCartActions.replaceCart({
                items: cartData.items || [],
                totalPrice: cartData.totalPrice || 0,
                totalQuantity: cartData.totalQuantity || 0
            }))
            
        } catch(error) {
            dispatch(uiSliceActions.showNotificacion({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed'
              }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiSliceActions.showNotificacion({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending Cart data!',
        }))

        const sendRequest = async () => {
            const response = await fetch('https://react-redux-async-28ab7-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                    totalPrice: cart.totalPrice
                })
            })
            if (!response.ok) {
                throw new Error('Sending cart data failed')
            }

        }
        try{

            await sendRequest()
            dispatch(uiSliceActions.showNotificacion({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully'
            }))
        } catch(error) {
            dispatch(uiSliceActions.showNotificacion({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed'
              }))
        }
    }
}
