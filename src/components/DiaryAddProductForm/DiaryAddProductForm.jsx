import React, { useEffect } from 'react';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';

import { productSearch } from 'services/api';
import {
  addProductOperations,
  userDayInfoOperation,
} from 'redux/dayCalendar/dayCalendarOperations';
import moment from 'moment/moment';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();

  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  // const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const date = useSelector(state => state.products.currentDate);
 
  useEffect(() => {
    if (product) {
      productSearch(product).then(setProducts);
    }
  }, [product]);

  const handleChangeProduct = e => {
    const { value } = e.target;
    setProduct(value);
  };
  const handleChangeWeight = e => {
    const { value } = e.target;
    setWeight(value);
  };
  const handleChangeDate = newValue => {
    dispatch(setDate(moment(newValue).format('yyyy-MM-DD')));
  };
  useEffect(() => {
    dispatch(userDayInfoOperation({ date: moment(date).format('yyyy-MM-DD') }));
  }, [dispatch, date]);
  const newProduct = {
    date,
    productId,
    weight,
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addProductOperations(newProduct))
      .unwrap()
      .then(() => {
        dispatch(userDayInfoOperation({ date }));
      });

    e.target.reset();
  }

  return (
    <div>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              slots={{ textField: TextField }}
              slotProps={{ textField: { variant: 'standard' } }}
              InputProps={{
                disableUnderline: true,
              }}
              sx={{
                div: {
                  border: 'none',
                },
                '& .MuiInputBase-root': {
                  border: 'none !important',
                },
                '& .MuiInputBase-input': {
                  fontSize: '16px',
                  border: 'none !important',
                },
              }}
              format="dd.MM.yyyy"
              minDate={dayjs('2020-01-01')}
              maxDate={dayjs(new Date())}
              defaultValue={new Date()}
              onChange={handleChangeDate}
              adapter={AdapterDateFns}
            />
          </DemoContainer>
        </LocalizationProvider>

        <label label="Product">
          <input
            list="listProducts"
            type="text"
            name="product"
            placeholder="Enter product name"
            value={product}
            onChange={handleChangeProduct}
          />

          {products?.map(({ _id, title }) => (
            <button
              type="button"
              key={_id}
              value={_id}
              style={{ display: 'block' }}
              onClick={() => {
                setProductId(_id);
                setProduct(title.ua);
                setProducts([]);
              }}
            >
              {title.ua}
            </button>
          ))}
        </label>

        <label label="Grams">
          <input
            type="number"
            name="weight"
            placeholder="Grams"
            value={weight}
            onChange={handleChangeWeight}
          />
        </label>

        <button type="submit">+</button>
      </form>
      <DiaryProductsList />
    </div>
  );
}

// document.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     eventCounter.throttled += 1;
//     throttledOutput.textContent = eventCounter.throttled;
//   }, 300)
// );

// document.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     eventCounter.debounced += 1;
//     debouncedOutput.textContent = eventCounter.debounced;
//   }, 300)
// );
