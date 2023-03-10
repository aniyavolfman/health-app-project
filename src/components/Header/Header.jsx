import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/authSelectors';
import Navigation from 'components/Navigation/Navigation';
import UserInfo from 'components/UserInfo/UserInfo';
import logoMob from '../../img/logo@2xMob.png';
import logoTab from '../../img/logoTabx2.png';
import logoPC from '../../img/logoPCx2.png';
import css from './Header.module.scss';
import { useWindowSize } from 'react-use';

export default function Header() {
  const token = useSelector(selectAccessToken);
  const { width } = useWindowSize();

  const getLogo = () => {
    if (width >= 1200) {
      return logoPC;
    } else if ((width >= 768 && width < 1200) || token) {
      return logoTab;
    } else {
      return logoMob;
    }
  };

  return (
    <>
      <header className={css.header}>
        <Link to="/" className={css.logo}>
          <img
            src={getLogo()}
            alt="logo"
            className={token && width < 768 ? css.logoSizeToken : css.logoSize}
          />
        </Link>
        <Navigation />

        {token && <UserInfo />}
      </header>
    </>
  );
}
