import { createSlice } from '@reduxjs/toolkit';
import { dailyRate } from 'services/api';
import {
  getAuthRecommendations,
  getRecommendations,
} from './dailyRateOperations';
//import { selectNotAllowedProduct, selectDailyRate } from './dailyRateSelectors';

const initialState = {
  notAllowedProducts: [],
  dailyCalories: '',
  isLoading: false,
  error: null,
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getRecommendations.pending, pendingHandler)
      .addCase(getRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notAllowedProducts = action.payload.notAllowedProducts;
        state.dailyCalories = action.payload.dailyRate;
      })
      .addCase(getRecommendations.rejected, rejectHandler)

      .addCase(getAuthRecommendations.pending, pendingHandler)
      .addCase(getAuthRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.notAllowedProducts = action.payload.notAllowedProducts;
        state.dailyCalories = action.payload.dailyRate;
      })
      .addCase(getAuthRecommendations.rejected, rejectHandler),
});

function pendingHandler(state) {
  state.error = null;
  state.isLoading = true;
}
function rejectHandler(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const dailyRateReducer = dailyRateSlice.reducer;
