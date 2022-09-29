import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../redux/operations';
import { AppBar } from './AppBar/AppBar';
import { Contacts } from './Contacts/Contacts';
import { Loader } from './Loader/Loader';
import { Login } from './Login/Login';
import { Register } from './Register/Register';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

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
