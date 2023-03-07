import React from 'react';

export default function Navigation() {
  return (
    <nav className={css.navigation}>
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
      <NavLink
        //   className={({ isActive }) =>
        //     isActive ? css.active : css.layoutLinkLast
        //   }
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
}
