import { NavLink, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/operations';
import s from './AppBar.module.css';

export function AppBar() {
  const dispatch = useDispatch();

  return (
    <header>
      <Link to="/" className={s.logo}>
        📓 Phonebook APP
      </Link>
      <div className={s.navWrapper}>
        <NavLink to="/register">Register</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <button type="button" onClick={() => dispatch(logout())}>
          Log Out
        </button>
      </div>
    </header>
  );
}
