import React, { useCallback, useEffect } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import css from './DiaryAddProductForm.module.scss';
import { useWindowSize } from 'react-use';
import { productSearch } from 'services/api';
import {
  addProductOperations,
  userDayInfoOperation,
} from 'redux/dayCalendar/dayCalendarOperations';
import moment from 'moment/moment';
import { DiaryProductsList } from 'components/DiaryProductsList/DiaryProductsList';
import { setDate } from 'redux/dayCalendar/dayCalendarSlice';
import { fetchCurrentUser } from 'redux/auth/authOperations';

import debounce from 'lodash/debounce';


const defaulDate = new Date();

export default function DiaryAddProductForm({
  handleOpenModal,
  onClose,
  isOpenModal,
  isInModal,
}) {
  const { width } = useWindowSize();
  const dispatch = useDispatch();
  const [product, setProduct] = useState('');
  const [weight, setWeight] = useState('');
  // const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState('');
  const date = useSelector(state => state.products.currentDate);
  const getProducts = useCallback(
    debounce(query => {
      if (!query) {
        return;
      }
      productSearch(query).then(data => {
        setProducts(data);
      });
    }, 1000)
  );


  // useEffect(() => {
  //   if (product) {
  //     productSearch(product).then(setProducts);
  //   }
  // }, [product]);


  const handleChangeProduct = e => {
    const { value } = e.target;
    setProduct(value);
    getProducts(product);
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

  const reset = () => {
    setProduct('');
    setWeight('');
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addProductOperations(newProduct))
      .unwrap()
      .then(() => {
        dispatch(fetchCurrentUser());
        onClose();
        dispatch(userDayInfoOperation({ date }));
      });
    reset();
    e.target.reset();
  }

  const shouldRender = () => {
    if ((width < 768 && isInModal) || (width > 767 && !isInModal)) {
      return true;
    }
    return false;
  };
  return (
    <div className={css.FormDiv}>
      {shouldRender() && (
        <form className={css.Form} autoComplete="off" onSubmit={handleSubmit}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DemoContainer components={['DatePicker']}>
              <DatePicker
                slots={{ textField: TextField }}
                slotProps={{
                  textField: {
                    variant: 'standard',
                    overflow: 'auto !important',
                  },
                }}
                InputProps={{
                  disableUnderline: true,
                }}
                sx={{
                  div: {
                    border: 'none',
                  },
                  '& .MuiInputBase-root': {
                    border: 'none',
                  },
                  '& .MuiInputBase-input': {
                    fontSize: '34px',
                    border: 'none !important',
                  },
                }}
                format="dd.MM.yyyy"
                minDate={dayjs('2020-01-01')}
                maxDate={dayjs(new Date())}
                defaultValue={defaulDate}
                onChange={handleChangeDate}
                adapter={AdapterDateFns}
              />
            </DemoContainer>
          </LocalizationProvider>
          <div className={css.inputProductTwo}>
            <label label="Product" className={css.inputProductLabel}>
              <input
                className={css.inputProduct}
                list="listProducts"
                type="text"
                name="product"
                placeholder="Введіть назву продукту"
                value={product}
                onChange={handleChangeProduct}
              />

              {products?.map(({ _id, title }) => (
                <button
                  // className={css.inputProductTwo}
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
            <label label="Grams" className={css.inputProductGrams}>
              <input
                className={css.inputGrams}
                type="number"
                name="weight"
                placeholder="Грами"
                value={weight}
                onChange={handleChangeWeight}
              />
            </label>
          </div>
          <button className={css.btnAddProduct} type="submit">
            {width > 768 ? (
              <IoIosAdd className={css.iconAddProduct} />
            ) : (
              'відправити'
            )}
          </button>
        </form>
      )}
      {!isInModal && <DiaryProductsList />}
      {width <= 768 && !isOpenModal && (
        <button type="button" onClick={handleOpenModal}>
          💙
        </button>
      )}
    </div>
  );
}
