import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import css from './DiaryPage.module.scss';

import React, { useState } from 'react';
import { ModalMobAddGrams } from 'components/ModalMobAddGrams/ModalMobAddGrams';

export default function DiaryPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const onClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={css.diaryPage}>
      <DiaryAddProductForm handleOpenModal={handleOpenModal} />
      <RightSideBar />
      {isOpenModal && (
        <ModalMobAddGrams onClose={onClose} isOpenModal={isOpenModal} />
      )}
    </div>
  );
}
