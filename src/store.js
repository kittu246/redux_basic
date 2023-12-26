
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cart/cartSlice.js';
import modalReducer from './slice/modal/modal.js';

export const store = configureStore({
    reducer:{
        cart:cartReducer,
        modal:modalReducer

    }
})