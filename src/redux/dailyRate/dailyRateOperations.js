import { createAsyncThunk } from '@reduxjs/toolkit';
import { dailyRate, dailyRateId } from 'services/api';

export const getRecommendations = createAsyncThunk(
  'dailyRate/user',
  async (userParams, { rejectWithValue }) => {
    try {
      const response = await dailyRate(userParams);
      //console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAuthRecommendations = createAsyncThunk(
  'dailyRate/auth',
  async (userParams, { rejectWithValue }) => {
    try {
      const response = await dailyRateId(userParams);
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
