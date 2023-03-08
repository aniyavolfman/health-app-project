import { createSlice } from '@reduxjs/toolkit';
import {
  addProductOperations,
  deleteProductOperation,
  // productSearchOperations,
} from './dayCalendarOperations';
import { productSearch } from 'services/api';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  query: '',
  itemTitle: '',
  itemWeight: '',
  itemKcal: '',
  itemId: '',
  dayId: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: builder => {
    builder
      //-------add-----////
      .addCase(addProductOperations.pending, pendingHandler)
      .addCase(addProductOperations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload];
        // state.items = action.payload;
        state.itemTitle = action.payload.eatenProduct.title;
        state.itemWeight = action.payload.eatenProduct.weight;
        state.itemKcal = action.payload.eatenProduct.kcal;
        state.itemId = action.payload.eatenProduct.id;
        state.dayId = action.payload.day.id;
      })

      .addCase(addProductOperations.rejected, rejectHandler)
      //-------delete-----////
      .addCase(deleteProductOperation.pending, pendingHandler)
      .addCase(deleteProductOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.items = state.items.filter(item => item.id !== action.payload.id);
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
