// import { debounce } from '@mui/material';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { day, dayDelete, productSearch } from 'services/api';

export const productSearchOperations = createAsyncThunk(
  'product/searchProduct',
  async (query, thunkAPI) => {
    try {
      const response = await productSearch(query);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//debounce(productSearch(query),1000)
//'scroll',
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)

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
