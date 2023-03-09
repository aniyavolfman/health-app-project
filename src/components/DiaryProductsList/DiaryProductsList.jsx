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
  console.log(products);
  const deleteProduct = e => {
    console.log(e.target);
    const dayIdObj = {
      dayId: idDay,
      eatenProductId: e.target.id,
    };
    console.log('cccccccc', dayIdObj);
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

//  {
//    /* {products?.map(({ id, name, number }) => (
//           <DiaryProductsListItem />
//         ))} */
//  }
//<DiaryProductsListItem key={id} name={name} number={number} btnId={id} />;
// {title}: <span>{weight} </span> <span>{kcal} </span>

// day delete

// приклад тіла запиту  {
//   "dayId": "507f1f77bcf86cd799439011",
//   "eatenProductId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
// }

// export async function dayDelete(credentials) {
//   try {
//     const { data } = await axios.delete('/day', credentials);
//     return data;
//   } catch (error) {
//     Notify.failure(error.message);
//   }
// }

//<DiaryProductsListItem key={id} name={name} number={number} btnId={id} />;
