import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOutRequest } from 'redux/auth/authOperations';
import { selectAccessToken, selectUserName } from 'redux/auth/authSelectors';
import Logo from '../../img/logo.png';

export default function Header() {
  const token = useSelector(selectAccessToken);
  const username = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <>
      <header>
        <a href="../../pages/HomePage">
          <img src={Logo} alt="logo" />
          SlimMom
        </a>
        <Navigation />
        {token ? (
          <div>
            <span>{username}</span>
            <NavLink to="/login" onClick={handleLogOut}>
              Exit
            </NavLink>
          </div>
        ) : (
          <UserInfo />
        )}
      </header>
    </>
  );
}
