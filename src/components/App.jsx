import { Routes, Route } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Contacts } from './Contacts/Contacts';
import { Loader } from './Loader/Loader';
import { Login } from './Login/Login';
import { Register } from './Register/Register';

function App() {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path="/" element={<p>Welcome to our service!</p>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Loader />
    </>
  );
}

export default App;
