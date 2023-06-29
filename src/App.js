import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/auth/login/Login';
import Register from '../src/pages/auth/signup/Register';
import Home from '../src/pages/home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './components/ProtectedRoutes';


function App() {

  return (

    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route exact path='/' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path="/chats" element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
