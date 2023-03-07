import { createSlice } from '@reduxjs/toolkit';
import {
  addProductOperations,
  deleteProductOperation,
} from './dayCalendarOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addProductOperations.pending, pendingHandler)
      .addCase(addProductOperations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
      })
      .addCase(addProductOperations.rejected, rejectHandler)

      .addCase(deleteProductOperation.pending, pendingHandler)
      .addCase(deleteProductOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
        // console.log(action.payload);
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
