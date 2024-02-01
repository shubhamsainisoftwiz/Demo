import React from 'react'
import One from '../components/One'
import Two from '../components/Two'

import { Route,Routes } from 'react-router-dom'
import ProtectedRoutes from './ProtectedRoutes'
import Errors from '../components/Errors'

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={  <One /> } />
        <Route path='/two' element={ <ProtectedRoutes Component={Two}  /> } />
        <Route path='*' element={<Errors /> } />
    </Routes>
  )
}

export default Routing