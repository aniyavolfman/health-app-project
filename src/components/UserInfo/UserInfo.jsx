import HomePage from 'pages/HomePage/HomePage';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOutRequest } from 'redux/auth/authOperations';
import { selectAccessToken, selectUserName } from 'redux/auth/authSelectors';

export default function UserInfo() {
  const token = useSelector(selectAccessToken);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(token);
    if (token) return;

    navigate('/login');
  }, [token, navigate]);

  return <div>{/* <HomePage /> */}</div>;
}
