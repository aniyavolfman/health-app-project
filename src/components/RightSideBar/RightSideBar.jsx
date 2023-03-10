import React from 'react';
import { useSelector } from 'react-redux';
import css from './RightSideBar.module.scss';
import { nanoid } from 'nanoid';

export default function RightSideBar() {
  const date = useSelector(state => state.products.currentDate);
  const notAllowedProducts = useSelector(
    state => state.auth.userData.notAllowedProducts);
  const summaries = useSelector(state => state.dailyRate.summaries);


  const shortProducts = notAllowedProducts?.slice(0, 9);

  return (
    <div className={css.userInfo}>
      <h2 className={css.userInfoTitle}>Summary for {date}</h2>
      <ul className={css.userInfoList}>
        <li className={css.userInfoItem}>
          Left
          <span className={css.userInfoData}>
            {summaries?.kcalLeft.toFixed(2)} ккал
          </span>
        </li>
        <li className={css.userInfoItem}>
          Consumed
          <span className={css.userInfoData}>
            {summaries?.kcalConsumed.toFixed(2)} ккал
          </span>
        </li>
        <li className={css.userInfoItem}>
          Daily rate
          <span className={css.userInfoData}>
            {summaries?.dailyRate.toFixed(2)} ккал
          </span>
        </li>
        <li className={css.userInfoItem}>
          % від норми
          <span className={css.userInfoData}>
            {summaries?.percentsOfDailyRate.toFixed(2)} %
          </span>
        </li>
      </ul>
      <h2 className={css.userInfoTitle}>Не рекомендовані продукти</h2>
      {!shortProducts && <p className={css.userInfoDescription}>
        Your diet will be displayed here
      </p>}
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
