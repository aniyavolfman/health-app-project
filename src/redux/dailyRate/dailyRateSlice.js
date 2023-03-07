import { createSlice } from '@reduxjs/toolkit';
import { getRecommandations } from './dailyRateOperations';

const initialState = {
  notAllowedProducts: [],
  dailyRate: '',
  isLoading: false,
  error: null,
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: initialState,
  reducers: {},
  extraReducers: builder =>
    builder
      .addCase(getRecommandations.pending, pendingHandler)
      .addCase(getRecommandations.fulfilled, (state, action) => {
        state.isLoading = 'false';
        state.notAllowedProducts = action.payload.notAllowedProducts;
        state.dailyRate = action.payload.dailyRate;
      })
      .addCase(getRecommandations.rejected, rejectHandler),
});

function pendingHandler(state) {
  state.error = null;
  state.isLoading = 'true';
}
function rejectHandler(state, action) {
  state.isLoding = 'false';
  state.error = action.payload;
}

export const dailyRateReducer = dailyRateSlice.reducer;
