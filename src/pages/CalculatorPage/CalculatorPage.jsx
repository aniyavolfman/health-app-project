import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import React from 'react';
import css from './CalculatorPage.module.scss';
export default function CalculatorPage() {
  return (
    <div className={css.calculatorPage}>
      <DailyCaloriesForm />
      <RightSideBar />
    </div>
  );
}
