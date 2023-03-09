import React from 'react';

export default function DiaryProductsListItem({
  title,
  weight,
  kcal,
  id,
  deleteProduct,
}) {
  return (
    <li>
      {title}: <span>{weight} </span> <span>{kcal} </span>
      <button id={id} type="button" onClick={deleteProduct}>
        X
      </button>
    </li>
  );
}
