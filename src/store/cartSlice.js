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
    loadCart: (state, action) => {
      const {cart, cartAmount} = action.payload;
      state.cart = cart || [];
      state.amount = cartAmount;
    },
    addToCart: (state, action) => {
      const {product, userId} = action.payload;
      state.cart.push(product)
      state.amount++
      state.userId = userId ? userId : 0;
    },
    removeFromCart: (state, action) => {
      const {product, userId} = action.payload;
      state.cart = state.cart.filter(item => item.id !== product)
      state.amount--
      state.userId = userId ? userId : 0;
    },
    dropCart: () => {
      return initialState;
    },
  }
})

export const {loadCart, addToCart, removeFromCart, dropCart} = cartSlice.actions;
export default cartSlice.reducer;
