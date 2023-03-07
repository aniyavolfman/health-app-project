import CalculatorСalorieForm from 'components/CalculatorСalorieForm/CalculatorСalorieForm'
import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';

import { ModalRec } from 'components/ModalRec/ModalRec';
import React from 'react';

export default function HomePage() {
  return (
    <div>
      <CalculatorСalorieForm />
      <DailyCaloriesForm />
      <ModalRec />
    </div>
  );
}
