import css from './ModalRec.module.scss';
import React from 'react';

import { MdClose } from 'react-icons/md';
import { useWindowSize } from 'react-use';

import { MdKeyboardReturn } from 'react-icons/md';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import {
  selectDailyCalories,
  selectError,
  selectIsLoading,
  selectNotAllowedProducts,
} from 'redux/dailyRate/dailyRateSelectors';

import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Link } from 'react-router-dom';

const modalRoot = document.getElementById('modal');
// console.log('modalRoot', modalRoot);

export function ModalRec({ onClose }) {
  const { width } = useWindowSize();
  const notAllowedProducts = useSelector(selectNotAllowedProducts);
  const dailyCalories = useSelector(selectDailyCalories);

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
      {error && <p>Ooops... something went wrong</p>}
      <div className={css.recModal}>
        {width < 768 && <span className={css.recModalEl}></span>}
        <button type="button" className={css.closeBtn}>
          {width > 768 ? (
            <MdClose
              style={{ width: 20, height: 20 }}
              onClick={() => onClose()}
            />
          ) : (
            <MdKeyboardReturn
              style={{ width: 20, height: 16 }}
              onClick={() => onClose()}
            />
          )}
        </button>

        <h2 className={css.recTitle}>
          Your recommended daily calorie intake is
        </h2>
        <p className={css.recElText}>
          {dailyCalories && (
            <span className={css.recEl}>{Math.round(dailyCalories)}</span>
          )}
          <span>ккал</span>
        </p>

        <p className={css.recText}>Foods you should not eat</p>
        <ol className={css.recList}>
          {notAllowedProducts.length > 0 &&
            notAllowedProducts.slice(0, 4).map(el => (
              <li className={css.recItem} key={el}>
                {el}
              </li>
            ))}
        </ol>

        <Link to="/register">
          <button type="submit" className={css.btnSubmit}>
            Start losing weight
          </button>
        </Link>
      </div>
    </div>,
    modalRoot
  );
}
