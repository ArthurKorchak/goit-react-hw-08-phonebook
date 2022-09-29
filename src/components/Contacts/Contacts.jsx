import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { InputForm } from '../InputForm/InputForm';

export function Contacts() {
  return (
    <>
      <h1>Phonebook</h1>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
}
