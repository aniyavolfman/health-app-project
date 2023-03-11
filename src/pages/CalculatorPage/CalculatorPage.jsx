import { DailyCaloriesForm } from 'components/DailyCaloriesForm/DailyCaloriesForm';
import { Loader } from 'components/Loader/Loader';
import RightSideBar from 'components/RightSideBar/RightSideBar';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectiIsLoadingUser } from 'redux/auth/authSelectors';
import { selectIsLoading } from 'redux/dailyRate/dailyRateSelectors';
import css from './CalculatorPage.module.scss';
export default function CalculatorPage() {

  const isloading = useSelector(selectIsLoading);
  const isLoadingUser = useSelector(selectiIsLoadingUser);

  return (
    <div className={css.calculatorPage}>
     {(isloading || isLoadingUser) && <Loader />}
      <DailyCaloriesForm />
      <RightSideBar />
    </div>
  );
}
