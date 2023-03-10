import React from 'react';
import { useSelector } from 'react-redux';
import css from './RightSideBar.module.scss';
import { nanoid } from 'nanoid';

export default function RightSideBar() {
  const date = useSelector(state => state.products.currentDate);
  const notAllowedProducts = useSelector(
    state => state.auth.userData.notAllowedProducts
  );
  const summaries = useSelector(state => state.dailyRate.summaries);

  const shortProducts = notAllowedProducts?.slice(0, 9);

  return (
    <div className={css.SidebarSection}>
      <div className={css.SidebarWrap}>
        <div className={css.SidebarRecomend}>
          <h2 className={css.userInfoTitle}>Summary for {date}</h2>
          <ul className={css.SidebarList}>
            <li className={css.SidebarItem}>
              <p className={css.SidebarText}>Залишилось</p>
              <p className={css.SidebarText}>
                {summaries?.kcalLeft.toFixed(2)} ккал
              </p>
              {/* <span className={css.userInfoData}>
            {summaries?.kcalLeft.toFixed(2)} ккал
          </span> */}
            </li>
            <li className={css.SidebarItem}>
              <p className={css.SidebarText}>Спожито</p>
              <p className={css.SidebarText}>
                {summaries?.kcalConsumed.toFixed(2)} ккал
              </p>
            </li>
            <li className={css.SidebarItem}>
              <p className={css.SidebarText}>Денна норма</p>
              <p className={css.SidebarText}>
                {summaries?.dailyRate.toFixed(2)} ккал
              </p>
            </li>
            <li className={css.SidebarItem}>
              <p className={css.SidebarText}>% від норми</p>
              <p className={css.SidebarText}>
                {summaries?.percentsOfDailyRate.toFixed(2)} %
              </p>
            </li>
          </ul>
        </div>
        <div className={css.SidebarNotRecomend}>
          <h2 className={css.userInfoTitle}>Не рекомендовані продукти</h2>
          {!shortProducts && (
            <p className={css.userInfoDescription}>
              Your diet will be displayed here
            </p>
          )}
          <ul>
            {shortProducts?.map(el => (
              <li key={nanoid()}>
                <span>{el}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
