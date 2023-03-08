import css from './ModalRec.module.scss';
import React from 'react';

import { MdClose } from 'react-icons/md';
import { useWindowSize } from 'react-use';

import { MdKeyboardReturn } from 'react-icons/md';
import { createPortal } from 'react-dom';
import { useSelect } from '@mui/base';
import { useSelector } from 'react-redux';
import {
  selectIsLoading,
  selectNotAllowedProducts,
} from 'redux/dailyRate/dailyRateSelectors';
import { selectError } from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

const modalRoot = document.getElementById('modal');
console.log('modalRoot', modalRoot);

export function ModalRec({ onClose }) {
  const { width } = useWindowSize();
  const notAllowedProducts = useSelect(selectNotAllowedProducts);
  const selectDailyCalories = useSelector(selectDailyCalories);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onEscapeClick = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', onEscapeClick);

    return () => {
      window.removeEventListener('keydown', onEscapeClick);
    };
  }, [onClose]);

  return createPortal(
    <div className={css.recBackdrop} onClick={onBackdropClick}>
      {isLoading && <Loader />}
      {error !== null && <p>Ooops... something went wrong</p>}
      <div className={css.recModal}>
        <button type="button" className={css.closeBtn} width="20">
          {width > 768 ? (
            <MdClose width="20" height="20" />
          ) : (
            <MdKeyboardReturn width="12" height="7" />
          )}
        </button>
        <h2 className={css.recTitle}>
          Your recommended daily calorie intake is
        </h2>
        <p className={css.recElText}>
          {selectDailyCalories && (
            <span className={css.recEl}>{Math.round(selectDailyCalories)}</span>
          )}
          <span>ккал</span>
        </p>

        <div className={css.recLine}></div>
        <p className={css.recText}>Foods you should not eat</p>
        <ol className={css.recList}>
          {notAllowedProducts.length > 0 &&
            notAllowedProducts.map(el => (
              <li className={css.recItem} key={el}>
                {el}
              </li>
            ))}
        </ol>

        <button type="submit" className={css.btnSubmit}>
          Start losing weight
        </button>
      </div>
    </div>,
    modalRoot
  );
}
