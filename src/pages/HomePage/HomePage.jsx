
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';

import { ModalRec } from 'components/ModalRec/ModalRec';
import React, { useState } from 'react';
import css from './HomePage.module.scss';


export default function HomePage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log('isOpenModal', isOpenModal);

  const handleOpenModal = () => {
    console.log(1);
    setIsOpenModal(true);
  };

  const onClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={css.pageWrapper}>
      <DailyCaloriesForm handleOpenModal={handleOpenModal} />

      {isOpenModal && <ModalRec onClose={onClose} />}
    </div>
  );
}
