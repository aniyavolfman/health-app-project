import { createSlice } from '@reduxjs/toolkit';
import {
  logOutRequest,
  refreshUserRequest,
  loginUserRequest,
  registerUserRequest,
} from './authOperations';

const initialState = {
  token: null,
  isLoading: false,
  error: null,
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(loginUserRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUserRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.email = action.payload.user.email;
        state.error = null;
      })
      .addCase(loginUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registerUserRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUserRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(registerUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ----- Refresh user -----
      .addCase(refreshUserRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUserRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.email = action.payload.email;
        state.error = null;
      })
      .addCase(refreshUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ----- Logout -----
      .addCase(logOutRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(logOutRequest.fulfilled, () => {
        return initialState;
      })
      .addCase(logOutRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.token = null;
      });
  },
});

export const authReducer = authSlice.reducer;