import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import Logo from '../../img/logo.png';
import css from './Header.module.scss';

export default function Header() {
  const token = useSelector(selectAccessToken);

  return (
    <>
      <header className={css.header}>
        <a href="../../pages/HomePage">
          <img src={Logo} alt="logo" />
        </a>

        <Link to="/" className={css.logo}>
          Slim<span className={css.logoOrange}>Mom</span>
        </Link>
        <Navigation />
        {token && <UserInfo />}
      </header>
    </>
  );
}
