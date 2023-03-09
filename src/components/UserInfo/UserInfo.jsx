import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutRequest } from 'redux/auth/authOperations';
import { selectAccessToken, selectUserName } from 'redux/auth/authSelectors';
import css from './UserInfo.module.scss';

export default function UserInfo() {
  const token = useSelector(selectAccessToken);
  // const navigate = useNavigate();
  const username = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };
  useEffect(() => {
    console.log(token);
    if (token) return;

    // navigate('/login');
  }, [
    token,
    // navigate
  ]);

  return (
    <div className={css.userInfo}>
      <span className={css.userName}>{username}</span>
      <NavLink to="/login" onClick={handleLogOut}>
        <span className={css.userExit}> Exit</span>
      </NavLink>
    </div>
  );
}
