import { createSlice } from '@reduxjs/toolkit';
import {
  addProductOperations,
  deleteProductOperation,
  userDayInfoOperation,
} from './dayCalendarOperations';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import moment from 'moment';

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
  days: [],
  currentDate: moment(new Date()).format('yyyy-MM-DD'),
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.currentDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      //-------add-----////
      .addCase(addProductOperations.pending, pendingHandler)
      .addCase(addProductOperations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = [...state.items, action.payload.eatenProduct];
        // state.items = action.payload;
        state.itemTitle = action.payload.eatenProduct.titчle;
        state.itemWeight = action.payload.eatenProduct.weight;
        state.itemKcal = action.payload.eatenProduct.kcal;
        state.itemId = action.payload.eatenProduct.id;
        state.dayId = action.payload.day.id;
      })
      //---------------------------
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.days = payload.days;
      })
      .addCase(addProductOperations.rejected, rejectHandler)
      //-------delete-----////
      .addCase(deleteProductOperation.pending, pendingHandler)
      .addCase(deleteProductOperation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteProductOperation.rejected, rejectHandler)
      //-------userInfo-----////
      .addCase(userDayInfoOperation.pending, pendingHandler)
      .addCase(userDayInfoOperation.fulfilled, (state, action) => {
        state.items = action.payload?.eatenProducts;
        state.dayId = action.payload?.id;
      });
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
export const { setDate } = productsSlice.actions;
