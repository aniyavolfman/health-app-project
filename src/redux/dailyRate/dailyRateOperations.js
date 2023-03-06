import { createAsyncThunk } from '@reduxjs/toolkit';
import { dailyRate, dailyRateId } from 'services/api';

export const getRecommandations = createAsyncThunk(
  '/daily-rate',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await dailyRate(credentials);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAuthRecommandations = createAsyncThunk(
  '/daily-rate',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await dailyRateId(credentials);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
