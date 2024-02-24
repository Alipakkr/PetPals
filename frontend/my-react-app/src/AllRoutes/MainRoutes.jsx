import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Petadoption from '../Pages/Petadoption'
import Home from '../Pages/Home'
import Payments from '../Pages/Payments'
import Petcards from '../components/Petcards'
import Loading from '../components/Loading'

const MainRoutes = () => {
  return (
    <Routes>

      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/pet-adoption' element={<Petadoption/>}/>
      <Route path='/payments' element={<Payments/>}/>
      <Route path='/pet' element={<Petcards/>}/>
      <Route path='/loading' element={<Loading/>}/>
    </Routes>
  )
}
export default MainRoutes