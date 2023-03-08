//import YourSvg from "/path/to/image.svg";

import Navigation from 'components/Navigation/Navigation';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">
          {/* <img src={YourSvg} alt="logo" /> */}
          SlimMom
        </Link>
        <Navigation />
      </header>

    </>
  );
}
