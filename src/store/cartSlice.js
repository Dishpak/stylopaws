import {createSlice} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    amount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      state.cart.push(product)
      state.amount++
    },
  }
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;
