import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './cartSlice'
import productReducer from "./productsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
})
