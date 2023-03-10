import { createAsyncThunk } from '@reduxjs/toolkit';
import { dailyRate, dailyRateId } from 'services/api';

export const getRecommendations = createAsyncThunk(
  'dailyRate/user',
  async (values, { rejectWithValue }) => {
    try {
      const response = await dailyRate(values);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAuthRecommendations = createAsyncThunk(
  'dailyRate/auth',
  async (values, { rejectWithValue }) => {
    try {
      const response = await dailyRateId(values);

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
