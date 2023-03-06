import css from './ModalRec.module.css';
import { MdClose } from 'react-icons/md';
import { MdKeyboardReturn } from 'react-icons/md';

import React from 'react';

export function ModalRec() {
  return (
    <div className={css.recBackdrop}>
      <div className={css.recModal}>
        <button type="button" className={css.closeBtn}>
          <MdKeyboardReturn width="12" height="7" />
        </button>

        <h2 className={css.recTitle}>
          Your recommended daily calorie intake is
        </h2>
        <p className={css.recElText}>
          <span className={css.recEl}>2800</span>ккал
        </p>
        <div class={css.recLine}></div>
        <p className={css.recText}>Foods you should not eat</p>
        <ol className={css.recList}>
          <li className={css.recItem}>Flour products</li>
          <li>Milk</li>
        </ol>
        <button type="submit" class={css.btnSubmit}>
          Start losing weight
        </button>
      </div>
    </div>
  );
}
