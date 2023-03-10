import React from 'react';
import { createPortal } from 'react-dom';

import css from '../ModalMobAddGrams/ModalMobAddGrams.module.scss';

import { MdKeyboardReturn } from 'react-icons/md';

const modalRoot = document.getElementById('modal');

export function ModalMobAddGrams() {
  return createPortal(
    <div className={css.backdrop}>
      <div className={css.modal}>
        <span className={css.modalEl}></span>
        <button type="button" className={css.closeBtn}>
          <MdKeyboardReturn style={{ width: 20, height: 16 }} />
        </button>
        <div className={css.titleBlock}>
          <p className={css.nicTitle}>nic |</p>
          <p className={css.exitTitle}>Exit</p>
        </div>
        <form className={css.form}>
          <input
            className={css.input}
            type="text"
            name="productName"
            // value={productName}
            // onChange={handleInputChange}
            placeholder="Enter product name"
            autoFocus
            required
          />
          <input
            className={css.input}
            type="text"
            name="grams"
            // value={grams}
            // onChange={handleInputChange}
            placeholder="Grams"
            autoFocus
            required
          />
          <button className={css.addBtn} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>,
    modalRoot
  );
}
