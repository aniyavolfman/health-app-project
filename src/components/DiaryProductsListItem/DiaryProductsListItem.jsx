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
        {/* {product}: <span>{grams} </span> <span>{calories} </span> */}
        <button id={'btnId'} onClick={deleteProduct}>
          X
        </button>
      </li>
    </div>
  );
}
