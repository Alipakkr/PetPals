import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
// import Signup from '../Pages/Regis'
import Petadoption from '../Pages/Petadoption'
import Home from '../Pages/Home'
import Payments from '../Pages/Payments'
import Petcards from '../components/Petcards'
import Loading from '../components/Loading'
import Singlepet from '../Pages/Singlepet'
import PrivateRoute from './PrivateRoute'
import Address from '../Pages/Address'
import { About } from '../Pages/About'
import { Contact } from '../Pages/Contact'
import Register from '../Pages/Register'
import Thankyou from '../Pages/Thankyou'
import { AdminLogin } from '../Admin/AdminLogin'
import { AdminHomePage } from '../Admin/AdminHomePage'

const MainRoutes = () => {
  return (
    <Routes>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/pet-adoption' element={<Petadoption />} />
      <Route path='/payments' element={<PrivateRoute><Payments /></PrivateRoute>} />
      {/* <Route path='/pet' element={<Petcards/>}/> */}
      <Route path='/loading' element={<Loading />} />
      <Route path='/pet/:petid' element={<PrivateRoute><Singlepet /></PrivateRoute>} />
      <Route path='/address' element={<PrivateRoute><Address /></PrivateRoute>} />
      <Route path='/thankyou' element={<PrivateRoute><Thankyou /></PrivateRoute>} />
      <Route path='/admin' element={<AdminLogin/>}/>
      <Route path='/adminHome' element={<AdminHomePage/>}/>
    </Routes>
  )
}
export default MainRoutes