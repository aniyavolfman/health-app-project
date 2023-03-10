import React from 'react';
import css from './DiaryProductsListItem.module.scss';
export default function DiaryProductsListItem({
  title,
  weight,
  kcal,
  id,
  deleteProduct,
}) {
  return (
    <li>
      <span className={css.singleLi}>
        <span className={css.titleProduct}>{title} </span>{' '}
        <span className={css.weightProduct}>{weight} g</span>{' '}
        <span className={css.kcalProduct}>{kcal} kcal </span>
        <button
          className={css.btnProduct}
          id={id}
          type="button"
          onClick={deleteProduct}
        >
          X
        </button>
      </span>
    </li>
  );
}
