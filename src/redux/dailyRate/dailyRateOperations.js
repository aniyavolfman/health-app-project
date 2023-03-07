import { createAsyncThunk } from '@reduxjs/toolkit';
import { dailyRate, dailyRateId } from 'services/api';

export const getRecommandations = createAsyncThunk(
  'dailyRate/user',
  async (userParams, { rejectWithValue }) => {
    try {
      const response = await dailyRate(userParams);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAuthRecommandations = createAsyncThunk(
  'dailyRate/auth',
  async (userParams, { rejectWithValue }) => {
    try {
      const response = await dailyRateId(userParams);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
