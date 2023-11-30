import { createSlice } from '@reduxjs/toolkit';
import product from '../components/products/Product';

export const productsSlice = createSlice({
  name: 'product',
  initialState: {
    product: {},
  },
  reducers: {
    loadProduct: (state, action) => {
      state.product = action.payload;
    },
  },
});

export const { loadProduct } = productsSlice.actions;
export default productsSlice.reducer;
