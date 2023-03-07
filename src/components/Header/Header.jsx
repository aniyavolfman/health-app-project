//import YourSvg from "/path/to/image.svg";

import Navigation from 'components/Navigation/Navigation';

export default function Header() {
  return (
    <>
      <header>
        <a href="../../pages/HomePage">
          {/* <img src={YourSvg} alt="logo" /> */}
          SlimMom
        </a>
        <Navigation />
      </header>

    </>
  );
}
