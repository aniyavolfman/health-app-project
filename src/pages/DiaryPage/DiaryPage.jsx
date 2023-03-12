import DiaryAddProductForm from 'components/DiaryAddProductForm/DiaryAddProductForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import css from './DiaryPage.module.scss';

import React, { useState } from 'react';
import { ModalMobAddGrams } from 'components/ModalMobAddGrams/ModalMobAddGrams';
import { useSelector } from 'react-redux';
import { selectiIsLoadingUser } from 'redux/auth/authSelectors';
import { Loader } from 'components/Loader/Loader';
import { selectisLoadingProduct } from 'redux/dayCalendar/dayCalendarSelectors';

export default function DiaryPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isLoadingUser = useSelector(selectiIsLoadingUser);
  const isLoadingProduct = useSelector(selectisLoadingProduct);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const onClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={css.diaryPage}>
      {(isLoadingProduct || isLoadingUser) && <Loader />}

      <DiaryAddProductForm handleOpenModal={handleOpenModal} />

      <RightSideBar />

      {isOpenModal && (
        <ModalMobAddGrams onClose={onClose} isOpenModal={isOpenModal} />
      )}
    </div>
  );
}
