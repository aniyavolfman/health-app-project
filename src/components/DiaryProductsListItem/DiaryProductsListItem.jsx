import React from 'react';
import { IoIosClose } from 'react-icons/io';
import css from './DiaryProductsListItem.module.scss';
export default function DiaryProductsListItem({
  title,
  weight,
  kcal,
  id,
  deleteProduct,
}) {
  return (
    <li className={css.liProduct}>
      <span className={css.singleSpan}>
        <span className={css.titleProduct}>{title} </span>{' '}
        <span className={css.weightProduct}>{weight} g</span>{' '}
        <span className={css.kcalProduct}>{kcal} kcal </span>
        <button
          className={css.btnProduct}
          id={id}
          type="button"
          onClick={deleteProduct}
        >
          <IoIosClose className={css.iconProduct} />
        </button>
      </span>
    </li>
  );
}
