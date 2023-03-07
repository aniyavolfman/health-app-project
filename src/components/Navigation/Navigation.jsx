import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/authSelectors';
import css from '../Navigation/Navigation.module.css';
import { useDispatch } from 'react-redux';
import {  logOutRequest  } from 'redux/auth/authOperations';


export default function Navigation() {
  const token = useSelector(selectAccessToken);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logOutRequest());
  };

  return (
    <nav className={css.navigation}>
      {token ? (
        <div className={css.navigationMenu}>
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
          <button  type="button" onClick={handleLogout}>
          LogOut
        </button> 
        </div>
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
