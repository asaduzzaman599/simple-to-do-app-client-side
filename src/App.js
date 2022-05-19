import logo from './logo.svg';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useQuery } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import Tasks from './Pages/Task/Tasks';
import RequireAuth from './Pages/Auth/RequireAuth';
import NotFound from './Pages/Shared/NotFound';

function App() {

  return (
    <div className="App min-h-screen">
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/task' element={<RequireAuth><Tasks></Tasks></RequireAuth>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
