import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserMenu } from './UserMenu';
import s from './AppBar.module.css';

export function AppBar() {
  const isAuth = useSelector(state => state.auth.isAuth);

  return (
    <header>
      <Link to="/" className={s.logo}>
        📓 Phonebook APP
      </Link>
      <div className={s.navWrapper}>
        {!isAuth ? <NavLink to="/register">Register</NavLink> : null}
        {isAuth ? <NavLink to="/contacts">Contacts</NavLink> : null}
        {!isAuth ? <NavLink to="/login">Log In</NavLink> : null}
        {isAuth ? <UserMenu /> : null}
      </div>
    </header>
  );
}
