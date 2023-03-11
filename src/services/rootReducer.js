import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from 'redux/auth/authSlice';
import { dailyRateReducer } from 'redux/dailyRate/dailyRateSlice';
import { productsReducer } from 'redux/dayCalendar/dayCalendarSlice';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducer,
  dailyRate: dailyRateReducer,
  products: productsReducer,
});
