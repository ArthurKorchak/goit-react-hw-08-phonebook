import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { InputForm } from '../InputForm/InputForm';

export function Contacts() {
  const isAuth = useSelector(state => state.auth.isAuth);

  if (isAuth) {
    return (
      <>
        <h1>Phonebook</h1>
        <InputForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </>
    );
  } else {
    return <Navigate to="/" replace={true} />;
  }
}
