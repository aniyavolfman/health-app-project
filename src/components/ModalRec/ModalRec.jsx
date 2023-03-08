import css from './ModalRec.module.scss';
// import { MdClose } from 'react-icons/md';
import { MdKeyboardReturn } from 'react-icons/md';

// import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
// import { useDispatch } from 'react-redux';

const modalRoot = document.getElementById('modal');
console.log(modalRoot);

export function ModalRec() {
  // const dispatch = useDispatch();

  //   useEffect(() => {
  //     const onEscapeClick = (event) => {
  // if (event.code === 'Escape') dispatch(closeModal())
  //     }

  //     window.addEventListener('keydown', onEscapeClick);

  //     return () => {
  //       window.removeEventListener('keydown', onEscapeClick)
  //     }
  //   }, [dispatch]);

  // const onBackdropClick = event => {
  //   if (event.target === event.currentTarget) dispatch(closeModal());
  // };

  // onClick = { onBackdropClick };
  return (
    createPortal(
      <div className={css.recBackdrop}>
        <div className={css.recModal}>
          <button type="button" className={css.closeBtn} width="20">
            <MdKeyboardReturn width="12" height="7" />
          </button>
          <h2 className={css.recTitle}>
            Your recommended daily calorie intake is
          </h2>
          <p className={css.recElText}>
            <span className={css.recEl}>2800</span>ккал
          </p>

          <div className={css.recLine}></div>
          <p className={css.recText}>Foods you should not eat</p>
          <ol className={css.recList}>
            <li className={css.recItem}>Flour products</li>
            <li>Milk</li>
          </ol>

          <button type="submit" className={css.btnSubmit}>
            Start losing weight
          </button>
        </div>
      </div>,  modalRoot
    )
  );
}
