import { createAsyncThunk } from '@reduxjs/toolkit';
import { day, dayDelete } from 'services/api';

export const addProductOperations = createAsyncThunk(
  'day/addProduct',
  async (_, thunkAPI) => {
    try {
      const response = await day();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProductOperation = createAsyncThunk(
  'day/deleteProduct',
  async (dayId, thunkAPI) => {
    try {
      const response = await dayDelete(dayId);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
