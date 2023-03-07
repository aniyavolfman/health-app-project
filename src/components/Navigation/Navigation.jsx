import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav>
      <NavLink
        // className={({ isActive }) =>
        //   isActive ? css.active : css.layoutLink
        // }
        to="/login"
      >
        LOG IN
      </NavLink>
      <NavLink
        //   className={({ isActive }) => (isActive ? css.active : css.layoutLink)}
        to="/register"
      >
        REGISTRATION
      </NavLink>
      <NavLink to="/diary">DIARY</NavLink>
      <NavLink
        //   className={({ isActive }) => (isActive ? css.active : css.layoutLink)}
        to="/calculator"
      >
        CALCULATOR
      </NavLink>
    </nav>
  );
}
