import { createSlice } from '@reduxjs/toolkit';
import { userDayInfoOperation } from 'redux/dayCalendar/dayCalendarOperations';
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
  summaries: null,
  userInfo: null,
};

export const dailyRateSlice = createSlice({
  name: 'dailyRate',
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
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
      .addCase(getAuthRecommendations.rejected, rejectHandler)
      .addCase(userDayInfoOperation.fulfilled, (state, action) => {
        state.summaries = action.payload?.daySummary;
      })
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
export const { setUser } = dailyRateSlice.actions;
