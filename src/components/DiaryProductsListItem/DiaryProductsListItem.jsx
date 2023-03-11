import React from 'react';
import { GrClose } from 'react-icons/gr';
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
        <span className={css.titleProduct}>{title} </span>
        <span className={css.weightProduct}>{weight} г</span>
        <span className={css.kcalProduct}>{kcal} ккал </span>
        <button
          className={css.btnProduct}
          id={id}
          type="button"
          onClick={deleteProduct}
        >
          <div style={{ background: 'white', color: '#9b9faa' }}>
            <GrClose
              style={{ background: 'white', color: '#9b9faa' }}
              className={css.iconProduct}
              id={id}
            />
          </div>
        </button>
      </span>
    </li>
  );
}


