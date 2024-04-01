import { createSlice } from "@reduxjs/toolkit";
import { uiSliceActions } from "../store/store";

const initialState = {
    items: [],
    totalPrice: 0,
    totalQuantity: 0,
    changed: false
}

const shoppingSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity
            state.items = action.payload.items
            state.totalPrice = action.payload.totalPrice
        },
        addItemToCart(state, action) {
            const { title, price, id } = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity++
            state.changed = true
            if (!existingItem) {
                state.items.push({
                    id,
                    title,
                    price,
                    quantity: 1
                })

            } else {
                existingItem.quantity++
            }

            state.totalPrice = state.totalPrice + price
        },
        removeItemFromCart(state, action) {
            const id = action.payload
            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            state.changed = true
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--
            }
            state.totalPrice = state.totalPrice - existingItem.price
        }
    }
})

export default shoppingSlice