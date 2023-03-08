import { createSlice } from '@reduxjs/toolkit';
import {
  addProductOperations,
  deleteProductOperation,
  productSearchOperations,
} from './dayCalendarOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  query:'',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      //-------search-----////
      .addCase(productSearchOperations.pending, pendingHandler)
      .addCase(productSearchOperations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        // console.log(action.payload);
      })
      .addCase(productSearchOperations.rejected, rejectHandler)
      //-------add-----////
      .addCase(addProductOperations.pending, pendingHandler)
      .addCase(addProductOperations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addProductOperations.rejected, rejectHandler)
      //-------delete-----////
      .addCase(deleteProductOperation.pending, pendingHandler)
      .addCase(deleteProductOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);

      })
      .addCase(deleteProductOperation.rejected, rejectHandler);
  },
});

export function pendingHandler(state) {
  state.isLoading = true;
  state.error = null;
}
export function rejectHandler(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const productsReducer = productsSlice.reducer;
