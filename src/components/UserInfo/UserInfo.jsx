import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutRequest } from 'redux/auth/authOperations';
import { selectAccessToken, selectUserName } from 'redux/auth/authSelectors';

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
    <div>
      <span>{username}</span>
      <NavLink to="/login" onClick={handleLogOut}>
        Exit
      </NavLink>
    </div>
  );
}
