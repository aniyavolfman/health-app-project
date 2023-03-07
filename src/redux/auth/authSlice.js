import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
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
  id: null,
  email: '',
  userData: null,
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
        state.error = null;
        state.id = action.payload.id;
        state.email = action.payload.email;
        state.username = action.payload.username;
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
      })
      
      // ----- get User -----
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.username = payload.username;
        state.isLoading = false;
        state.error = null;
        state.isFetchingCurrentUser = false;
        state.email = payload.email;
        state.id = payload.id;
        state.userData = payload.userData;
      })
      .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.username = '';
        state.email = '';
        state.isFetchingCurrentUser = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isLoading = true;
        state.isFetchingCurrentUser= true;
      })
  }
});

export const authReducer = authSlice.reducer;
