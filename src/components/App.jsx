import { InputForm } from './InputForm/InputForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { AppBar } from './AppBar/AppBar';

function App() {
  return (
    <>
      <AppBar />
      <h1>Phonebook</h1>
      <InputForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <Loader />
    </>
  );
}

export default App;
