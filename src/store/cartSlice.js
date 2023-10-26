import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  amount: 0,
  userId: null,
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {product, userId} = action.payload;
      state.cart.push(product)
      state.amount++
      state.userId = userId
    },
    removeFromCart: (state, action) => {
      const {product, userId} = action.payload;
      state.cart = state.cart.filter(item => item.id !== product)
      state.amount--
      state.userId = userId;
    },
    dropCart: (state, action) => {
      return initialState;
    },
  }
})

export const {addToCart, removeFromCart, dropCart} = cartSlice.actions;
export default cartSlice.reducer;
