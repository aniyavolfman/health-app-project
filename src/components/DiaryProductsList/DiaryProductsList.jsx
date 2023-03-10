import DiaryProductsListItem from 'components/DiaryProductsListItem/DiaryProductsListItem';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteProductOperation,
  userDayInfoOperation,
} from 'redux/dayCalendar/dayCalendarOperations';

export function DiaryProductsList() {
  const dispatch = useDispatch();
  const date = useSelector(state => state.products.currentDate);
  const products = useSelector(state => state.products.items);
  const idDay = useSelector(state => state.products.dayId);
 
  const deleteProduct = e => {
   
    const dayIdObj = {
      dayId: idDay,
      eatenProductId: e.target.id,
    };
    
    console.log(e.target);
    localStorage.setItem('dayIdObj', JSON.stringify(dayIdObj));
    dispatch(deleteProductOperation(dayIdObj))
      .unwrap()
      .then(() => {
        dispatch(userDayInfoOperation({ date }));
      });
  };

  return (
    <div>
      <ul>
        {products?.map(({ id, title, weight, kcal }) => (
          <DiaryProductsListItem
            key={id}
            id={id}
            title={title}
            weight={weight}
            kcal={Math.round(kcal)}
            deleteProduct={deleteProduct}
          />
        ))}
      </ul>
    </div>
  );
}


