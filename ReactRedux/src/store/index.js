import authSlice from '../reducers/Authenticate'
import counterSlice from '../reducers/Counter'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        counter: counteprSlice.reducer,
        authenticate: authSlice.reducer
    }
})

export default store

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions