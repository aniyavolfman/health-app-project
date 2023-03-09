import { format, parseISO } from 'date-fns';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';

import { day, productSearch } from 'services/api';
import {
  addProductOperations,
  createProductListOperations,
  createProductOperations,
  userDayInfoOperation,
} from 'redux/dayCalendar/dayCalendarOperations';
import moment from 'moment/moment';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { fetchCurrentUser } from 'redux/auth/authOperations';

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  // const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');

  useEffect(() => {
    if (product) {
      productSearch(product).then(setProducts);
    }
  }, [product]);

  const handleChangeProduct = e => {
    // console.log(e.target);
    const { value } = e.target;
    setProduct(value);
  };
  const handleChangeWeight = e => {
    const { value } = e.target;
    setWeight(value);
  };
  const handleChangeDate = newValue => {
    setDate(moment(newValue).format('yyyy-MM-DD'));
    console.log('>>>>>', date, moment(date).format('yyyy-MM-DD'));
  };
  useEffect(() => {
    dispatch(userDayInfoOperation({ date: moment(date).format('yyyy-MM-DD') }));
  }, [dispatch, date]);
  const newProduct = {
    date,
    productId,
    weight,
  };
  // console.log('date, product, weight', newProduct);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addProductOperations(newProduct));

    // dispatch(createProductListOperations());
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
              // value={parseISO(date)}
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
            // min="100"
            name="weight"
            placeholder="Grams"
            value={weight}
            onChange={handleChangeWeight}
          />
        </label>

        <button type="submit">+</button>
      </form>
      <DiaryProductsList currentDate={date} />
    </div>
  );
}

// day

// приклад тіла запиту  {
//   "date": "2020-12-31",
//   "productId": "5d51694802b2373622ff552c",
//   "weight": 100
// }

// export async function day(credentials) {
//   try {
//     const { data } = await axios.post('/day', credentials);
//     return data;
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// }

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
