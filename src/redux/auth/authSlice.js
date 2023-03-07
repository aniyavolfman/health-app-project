import { createSlice } from '@reduxjs/toolkit';
import {
  loginUserRequest,
  logOutRequest,
  refreshUserRequest,
  registerUserRequest,
} from './authOperations';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoading: false,
  username: '',
  error: null,
  // email: '',
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
        console.log(action.payload);
        state.accessToken = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.sid = action.payload.sid;
        state.username = action.payload.user.username;
        state.error = null;
      })
      .addCase(loginUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(registerUserRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUserRequest.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerUserRequest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ----- Get current user -----
      .addCase(refreshUserRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshUserRequest.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.email = action.payload.email;
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
