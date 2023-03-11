import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { Loader } from 'components/Loader/Loader';

import { ModalRec } from 'components/ModalRec/ModalRec';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectiIsLoadingUser } from 'redux/auth/authSelectors';
import { selectIsLoading } from 'redux/dailyRate/dailyRateSelectors';
import css from './HomePage.module.scss';

export default function HomePage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isloading = useSelector(selectIsLoading);
  const isLoadingUser = useSelector(selectiIsLoadingUser);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const onClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div className={css.pageWrapper}>
      <DailyCaloriesForm handleOpenModal={handleOpenModal} />
      {(isloading || isLoadingUser) && <Loader />}

      {isOpenModal && <ModalRec onClose={onClose} />}
    </div>
  );
}
