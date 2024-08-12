import { NavLink, useLocation } from 'react-router-dom';
import style from './Header.module.scss';
import clsx from 'clsx';

const Header = () => {
  const location = useLocation();

  const getLocation = (to) => {
    return to === location.pathname
      ? clsx(style.navLink, style.active)
      : style.navLink;
  };

  return (
    <nav className={style.navigation}>
      <ul className={style.navigationList}>
        <li>
          <NavLink className={`${getLocation('/')}`} to="/">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={`${getLocation('/resume')}`} to="/resume">
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink className={`${getLocation('/portfolio')}`} to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className={`${getLocation('/blog')}`} to="/blog">
            Blog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
