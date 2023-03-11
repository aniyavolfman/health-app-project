import React, { useCallback, useEffect } from 'react';
import { VscAdd } from 'react-icons/vsc';
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
    }, 500)
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
        if(width < 768 && isInModal) { onClose();}
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
          <div
            style={({ width: '260px' }, { float: 'left' }, { border: 'none' })}
          >
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DemoContainer components={['DatePicker']}>
                <DatePicker
                  slots={{ textField: TextField }}
                  slotProps={{
                    textField: {
                      variant: 'standard',
                      overflow: 'auto !important',
                      border: 'none',
                    },
                  }}
                  InputProps={{
                    disableUnderline: true,
                    border: 'none',
                  }}
                  sx={{
                    div: {
                      border: 'transparent',
                    },
                    '& .MuiInputBase-root': {
                      border: 'none',
                    },
                    '& .MuiInputBase-input': {
                      border: 'none',
                      fontSize: '34px',
                      fontWeight: '700',
                      lineHeight: '1.2',
                      padding: '0',
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
          </div>
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
            <label label="Grams">
              <input
                className={css.inputGrams}
                type="text"
                name="weight"
                placeholder="Грами "
                value={weight}
                onChange={handleChangeWeight}
              />
            </label>
            <div className={css.divAddProduct}>
              <button className={css.btnAddProduct} type="submit">
                {width > 768 ? (
                  // <IoIosAdd style={{ alignItems: "center" }} className={css.iconAddProduct} />
                  <VscAdd className={css.iconAddProduct} />
                ) : (
                  'Відправити'
                )}
              </button>
            </div>
          </div>
        </form>
      )}
      {!isInModal && <DiaryProductsList />}
      {width <= 768 && !isOpenModal && (
        <div className={css.divAddProduct}>
          <button
            type="button"
            className={css.btnAddProductMob}
            onClick={handleOpenModal}
          >
            <VscAdd className={css.iconAddProduct} />
          </button>
        </div>
      )}
    </div>
  );
}
