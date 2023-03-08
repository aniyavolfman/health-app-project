import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { productSearchOperations } from 'redux/dayCalendar/dayCalendarOperations';
import { productSearch } from 'services/api';

export default function DiaryAddProductForm() {
  const dispatch = useDispatch();

  const [date, setDate] = useState(new Date());
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState('');

  useEffect(() => {
    productSearch(product).then(console.log);
  }, [product]);

  console.log(date, format(date, 'yyyy-MM-dd'));
  const formatDate = format(date, 'yyyy-MM-dd');
  const userMap = {
    date: formatDate,
    product: setProduct,
    weight: setWeight,
  };
  console.log(userMap);
  const handleAddProducts = e => {
    const { name, value } = e.target;
    userMap[name](value);
    console.log(e.target.value);
  };
  console.log(date, product, weight);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(productSearchOperations(query));
    e.target.reset();
  };

  // const handleChange = newDate => {
  //   const formatDate = format(newDate, 'yyyy-MM-dd');
  //   setDate(formatDate);
  //   console.log(newDate);
  // };
  // {newValue => {
  //             setSelectedDate(newValue);
  //           }

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
              value={date}
              onChange={newValue => {
                setDate(newValue);
              }}
              adapter={AdapterDateFns}
            />
          </DemoContainer>
        </LocalizationProvider>

        <label label="Product">
          <input
            type="text"
            name="product"
            placeholder="Enter product name"
            value={product}
            onChange={handleAddProducts}
          />
        </label>

        <label label="Grams">
          <input
            type="number"
            min="100"
            name="weight"
            placeholder="Grams"
            value={weight}
            onChange={handleAddProducts}
          />
        </label>

        <button type="submit">+</button>
      </form>
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
