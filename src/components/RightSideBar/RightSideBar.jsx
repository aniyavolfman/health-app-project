import React from 'react';
import { useSelector } from 'react-redux';
import css from './RightSideBar.module.scss';
import { nanoid } from 'nanoid';

export default function RightSideBar() {
  const date = useSelector(state => state.products.currentDate);
  const allowedProducts = useSelector(
    state => state.dailyRate.notAllowedProducts
  );
  const summaries = useSelector(state => state.dailyRate.summaries);

  const shortProducts = allowedProducts.slice(0, 9);

  return (
    <div className={css.userInfo}>
      <h2 className={css.userInfoTitle}>Summary for {date}</h2>
      <ul className={css.userInfoList}>
        <li className={css.userInfoItem}>
          Left
          <span className={css.userInfoData}>
            {summaries?.find(option => option.date === date).kcalLeft} kcal
          </span>
        </li>
        <li className={css.userInfoItem}>
          Consumed
          <span className={css.userInfoData}>
            {summaries?.find(option => option.date === date).kcalConsumed} kcal
          </span>
        </li>
        <li className={css.userInfoItem}>
          Daily rate
          <span className={css.userInfoData}>
            {summaries?.find(option => option.date === date).dailyRate} kcal
          </span>
        </li>
        <li className={css.userInfoItem}>
          n% of normal
          <span className={css.userInfoData}>
            {summaries?.find(option => option.date === date).percentsOfDailyRate.toFixed(2)} kcal
          </span>
        </li>
      </ul>
      <h2 className={css.userInfoTitle}>Food not recommended</h2>
      {/* <p className={css.userInfoDescription}>
        Your diet will be displayed here
      </p> */}
      <ul>
        {shortProducts?.map(el => (
          <li key={nanoid()}>
            <span>{el}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
