import {createSlice} from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: 'product',
  initialState: {
    product: {}
  },
  reducers: {
    loadProduct: (state, action) => {
      state.product = action.payload;
      console.log(state);
    }
  }
})

export const {loadProduct} = productsSlice.actions;
export default productsSlice.reducer;
