import { configureStore } from "@reduxjs/toolkit";
import shoppingSlice from "../reducers/cart-slice";
import uiSlice from "../reducers/uiViews";

const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        cart: shoppingSlice.reducer
    }
})

export const shoppingCartActions = shoppingSlice.actions
export const uiSliceActions = uiSlice.actions

export default store

