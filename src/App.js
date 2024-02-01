import Admindashboard from './Admin/Admindashboard';
import Adminlogin from './Admin/Adminlogin';
import Adminsignup from './Admin/Adminsignup';
import Timeallowt from './Admin/components/Timeallowt';
import './App.css';
import Bookingpage from './pages/Bookingpage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

import { Route, Routes,Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
     <Routes>
       <Route path='/' element={<Home/>} />
       <Route path='/login' element={<Login />} />
       <Route path='/adminlogin' element={<Adminlogin/>} />
       <Route path='/register' element={  <Register/>} />
       <Route path='/dashboard' element={<Dashboard/>} />
       <Route path='/bookingpage' element={<Bookingpage/>} />
      
       <Route path='/admindashboard' element={<Admindashboard/>} />
       <Route path='/adminsignup' element={<Adminsignup/>} />
       <Route path='/timeallowt' element={<Timeallowt/>} />
      
       <Route path='/*' element={<Navigate to={'/'}/>} /> 
     </Routes>
  
   </div>
  );
}

export default App;
