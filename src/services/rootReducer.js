import { combineReducers } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { authReducer } from 'redux/auth/authSlice';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['accessToken', 'refreshToken', 'sid'],
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const rootReducer = combineReducers({
  auth: persistedReducer,
});
