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

  const shortProducts = notAllowedProducts?.slice(0, 4);

  return (
    <div className={css.SidebarSection}>
      <div className={css.SidebarWrap}>
        <div className={css.SidebarRecomend}>
          <h2 className={css.SidebarTitle}>Підсумок на {date}</h2>
          <ul className={css.SidebarList}>
            <li className={css.SidebarItem}>
              <p className={css.SidebarText}>Залишилось</p>
              <p className={css.SidebarText}>
                {summaries?.kcalLeft.toFixed(2)} ккал
              </p>
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
          <h2 className={css.SidebarTitle}>Не рекомендовані продукти</h2>
          {shortProducts?.length===0 && (
            <p className={css.SidebarText}>Ваша дієта буде тут</p>
          )}
          <ul className={css.SidebarList}>
            {shortProducts?.map(el => (
              <li className={css.SidebarItem} key={nanoid()}>
                <p className={css.SidebarText}>{el}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}


