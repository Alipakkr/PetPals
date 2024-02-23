import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Petadoption from '../Pages/Petadoption'
import Home from '../Pages/Home'
import Form from '../components/Form'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/' element={<Home />} />
      <Route path='/pet-adoption' element={<Petadoption />} />
    
    </Routes>
  )
}

export default MainRoutes