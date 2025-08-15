// src/features/product/productSlice.js
import { createSlice } from '@reduxjs/toolkit';
import all_product from '../../assets/all_product';

const initialState = {
  allProducts: all_product,
  searchQuery: '',
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
