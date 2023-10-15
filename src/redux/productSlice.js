import {createSlice} from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    product: {}
  },
  reducers: {
    loadProduct: (state, action) => {
      state.product = {...action.payload};
      console.log(state);
    }
  }
})

export const {loadProduct} = productSlice.actions;
export default productSlice.reducer;
