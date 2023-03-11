import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { selectAccessToken } from 'redux/auth/authSelectors';
import css from '../Navigation/Navigation.module.scss';

export default function Navigation() {
  const token = useSelector(selectAccessToken);
  const [nav, setNav] = useState(false);

  return (
    <nav className={css.navigation}>
      {token ? (
        <>
          <div className={nav ? [css.menu, css.activeNav].join(' ') : css.menu}>
            <NavLink
              className={({ isActive }) =>
                isActive ? css.active : css.navigationLink
              }
              to="/diary"
            >
              ЩОДЕННИК
            </NavLink>
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                isActive ? css.active : css.navigationLink
              }
            >
              ПІДРАХУНОК
            </NavLink>
          </div>
          <div
            onClick={() => {
              setNav(!nav);
            }}
            className={css.mobile_btn}
          >
            {nav ? <AiOutlineClose size={14} /> : <AiOutlineMenu size={18} />}
          </div>
        </>
      ) : (
        <div className={css.navigationMenu}>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.active : css.navigationLink
            }
            to="/login"
          >
            ВХІД
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.active : css.navigationLink
            }
            to="/register"
          >
            РЕЄСТРАЦІЯ
          </NavLink>
        </div>
      )}
    </nav>
  );
}
