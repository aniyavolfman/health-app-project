import CalculatorСalorieForm from 'components/CalculatorСalorieForm/CalculatorСalorieForm';
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';

import { ModalRec } from 'components/ModalRec/ModalRec';
import React, { useState } from 'react';

export default function HomePage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };

  const onClose = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <CalculatorСalorieForm />
      <DailyCaloriesForm handleOpenModal={handleOpenModal} />

      {isOpenModal && <ModalRec onClose={onClose} />}
    </div>
  );
}
