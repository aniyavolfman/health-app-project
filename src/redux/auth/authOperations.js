// import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    refresh,
    login,
    register,
    logout,
    token,
  } from '../../services/api';

  import { Notify } from 'notiflix/build/notiflix-notify-aio';

  export const registerUserRequest = createAsyncThunk(
    'auth/register',
    async (formData, thunkAPI) => {
      try {
        const response = await register(formData);
        token.set(response.token, 'Bearer');
        return response;
      } catch (error) {
        Notify.failure('You input data in false format, please try again');
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  
  export const loginUserRequest = createAsyncThunk(
    'auth/login',
    async (formData, { rejectWithValue }) => {
      try {
        const response = await login(formData);
        token.set(response.token, 'Bearer');
        return response;
      } catch (error) {
        Notify.failure('False login or e-mail, please try again');
        return rejectWithValue(error.message);
      }
    }
  );

  export const refreshUserRequest = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
      try {
        const { token: savedToken } = thunkAPI.getState().auth;
        if (!savedToken) return thunkAPI.rejectWithValue('no token');
        token.set(savedToken);
        const response = await refresh();
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
        const response = await logout();
        token.unSet(savedToken);
        return response;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

