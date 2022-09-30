import { useSelector } from 'react-redux';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { InputForm } from '../InputForm/InputForm';
import s from './Contacts.module.css';

export function Contacts() {
  const isAuth = useSelector(state => state.auth.isAuth);

  if (isAuth) {
    return (
      <div className={s.wrapper}>
        <div className={s.lables}>
          <Filter />
          <InputForm />
        </div>
        <ContactsList />
      </div>
    );
  } else {
    return <p className={s.title}>Log in or register to join the service!</p>;
  }
}
