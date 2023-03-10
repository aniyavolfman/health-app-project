import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import { selectAccessToken } from 'redux/auth/authSelectors';
import css from '../Navigation/Navigation.module.scss';

export default function Navigation() {
  const token = useSelector(selectAccessToken);
  const [nav, setNav] = useState(false);
  // nav =open

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
              DIARY
            </NavLink>
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                isActive ? css.active : css.navigationLink
              }
            >
              CALCULATOR
            </NavLink>
          </div>
          <div onClick={() => setNav(!nav)} className={css.mobile_btn}>
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
            LOG IN
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? css.active : css.navigationLink
            }
            to="/register"
          >
            REGISTRATION
          </NavLink>
        </div>
      )}
    </nav>
  );
}
