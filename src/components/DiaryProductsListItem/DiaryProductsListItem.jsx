import { ListItem } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

export default function DiaryProductsListItem({
  title,
  weight,
  kcal,
  id,
  deleteProduct,
}) {
  console.log('ffff', title, weight, kcal, id, deleteProduct);

  return (
    <li>
      {title}: <span>{weight} </span> <span>{kcal} </span>
      <button id={id} type="button" onClick={deleteProduct}>
        X
      </button>
    </li>
  );
}
