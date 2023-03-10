import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import css from '../ModalMobAddGrams/ModalMobAddGrams.module.scss';

import { MdKeyboardReturn } from 'react-icons/md';
import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';

const modalRoot = document.getElementById('modal');

export function ModalMobAddGrams({ onClose, isOpenModal }) {
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
    <div className={css.backdrop} onClick={onBackdropClick}>
      <div className={css.modal}>
        <button type="button" className={css.closeBtn}>
          <MdKeyboardReturn
            style={{ width: 20, height: 16 }}
            onClick={() => onClose()}
          />
        </button>

        <DiaryAddProductForm
          isInModal
          onClose={onClose}
          isOpenModal={isOpenModal}
        />
      </div>
    </div>,
    modalRoot
  );
}
