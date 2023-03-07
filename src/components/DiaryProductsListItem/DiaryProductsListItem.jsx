import React from 'react';
import { useDispatch } from 'react-redux';

export default function DiaryProductsListItem() {
  const dispatch = useDispatch();
  const deleteProduct = e => {
    // dispatch(deleteProductOperation(e.target.id));
  };
  return (
    <div>
      DiaryProductsListItem
      <li>
        {/* {title}: <span>{weight} </span> <span>{kcal} </span> */}
        <button id={'id'} onClick={deleteProduct}>
          X
        </button>
      </li>
    </div>
  );
}
