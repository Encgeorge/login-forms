
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter, Route,Routes} from 'react-router-dom';
import Home from './Home';
import Log from './Log';
import Login from './login';
import Register from './Register';
import Resetpassword from './Resetpassword';

export function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Login/>} path='/' exact/>
      <Route element={<Register/>} path='/register' />
      <Route element={<Resetpassword/>} path='/reset' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
