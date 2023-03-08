import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { ModalRec } from 'components/ModalRec/ModalRec';
import React, { useState } from 'react';

export default function CalculatorPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  console.log('isOpenModal', isOpenModal);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const onClose = () => {
    setIsOpenModal(false);
  };
  return (
    <div>
      <DailyCaloriesForm handleOpenModal={handleOpenModal} />

      {isOpenModal && <ModalRec onClose={onClose} />}
    </div>
  );
}
