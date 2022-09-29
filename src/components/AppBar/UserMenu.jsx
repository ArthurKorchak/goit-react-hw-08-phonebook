import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/operations';

export function UserMenu() {
  const dispatch = useDispatch();
  const main = useSelector(state => state.auth.mail);

  return (
    <div>
      <p>{main}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Log Out
      </button>
    </div>
  );
}
