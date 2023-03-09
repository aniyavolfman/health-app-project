// import { debounce } from '@mui/material';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { day, dayDelete, dayInfo } from 'services/api';

// export const productSearchOperations = createAsyncThunk(
//   'product/searchProduct',
//   async (query, thunkAPI) => {
//     try {
//       const response = await productSearch(query);
//       return response;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
//debounce(productSearch(query),1000)
//'scroll',
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)

export const addProductOperations = createAsyncThunk(
  'day/addProduct',
  async (dataObj, thunkAPI) => {
    console.log('response', dataObj);
    try {
      const response = await day(dataObj);
      // console.log('addProductOperations', response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const createProductListOperations = createAsyncThunk(
  'day/createProductList',
  async (_, thunkAPI) => {
    // console.log('response', dataObj);
    try {
      const listDayProducts = useSelector(state => state.auth.days);
      console.log('listDayProducts', listDayProducts);
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
      // const state = thunkAPI.getState();
      // const idDay = state.products.dayId;
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
      // const state = thunkAPI.getState();
      // const idDay = state.products.dayId;
      const response = await dayInfo(day);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
