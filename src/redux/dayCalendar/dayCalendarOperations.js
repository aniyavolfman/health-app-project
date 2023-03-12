import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { day, dayDelete, dayInfo } from 'services/api';

export const addProductOperations = createAsyncThunk(
  'day/addProduct',
  async (dataObj, thunkAPI) => {
    try {
      const response = await day(dataObj);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createProductListOperations = createAsyncThunk(
  'day/createProductList',
  async (_, thunkAPI) => {
    try {
      const listDayProducts = useSelector(state => state.auth.days);
      return listDayProducts;
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
export const userDayInfoOperation = createAsyncThunk(
  'day/getDayInfo',
  async (day, thunkAPI) => {
    try {
      const response = await dayInfo(day);

      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
