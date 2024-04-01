import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShowShoppingCart: false,
    notification : null
}

const uiSlice = createSlice({
    name : 'ui',
    initialState,
    reducers: {
        toggleShoppingCart(state){
            state.isShowShoppingCart = !state.isShowShoppingCart
        },
        showNotificacion(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})

export default uiSlice