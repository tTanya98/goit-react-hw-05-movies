import { NavLink } from 'react-router-dom';
import sty from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={sty.link} activeClassName={sty.active}>
      Home
    </NavLink>

    <NavLink to="/movies" className={sty.link} activeClassName={sty.active}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;