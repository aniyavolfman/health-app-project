// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import // getUserDetailsRequest,
// login,
// register,
// token,
// userLogOutRequest,
'../../services/api';

import { login, logOut, refresh, register, token } from '../../services/api';

export const registerUserRequest = createAsyncThunk(
  'auth/register',
  async (formData, thunkAPI) => {
    try {
      const response = await register(formData);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUserRequest = createAsyncThunk(
  'auth/login',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await login(formData);
      console.log(response);
      token.set(response.accessToken, response.refreshToken);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserRequest = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    try {
      const { sid, refreshToken } = thunkAPI.getState().auth;
      console.log(sid);
      if (!sid) return thunkAPI.rejectWithValue('no sid');
      const response = await refresh(sid, refreshToken);
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOutRequest = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      const { token: savedToken } = thunkAPI.getState().auth;
      const response = await logOut();
      console.log(response);
      token.unSet(savedToken);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
//   try {
//     await instance.post('/auth/logout');
//     ????????? clearAuthHeader();
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message);
//   }
// });
