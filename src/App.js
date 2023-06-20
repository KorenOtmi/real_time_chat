import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../src/pages/auth/login/Login';
import Register from '../src/pages/auth/signup/Register';
import Home from '../src/pages/home/Home';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/chats' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
