import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/operations';

export function Login() {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const inputOperator = event => {
    if (event.target.name === 'email') {
      setMail(event.target.value);
    } else if (event.target.name === 'password') {
      setPassword(event.target.value);
    } else {
      throw new Error('Unexpected value');
    }
  };
  const formSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setMail('');
    setPassword('');
  };

  return (
    <form onSubmit={formSubmit}>
      <label>
        Email
        <input type="email" name="email" required value={email} onChange={inputOperator} />
      </label>
      <label>
        Password
        <input type="password" name="password" required value={password} onChange={inputOperator} />
      </label>
      <button type="submit">Log in</button>
    </form>
  );
}
