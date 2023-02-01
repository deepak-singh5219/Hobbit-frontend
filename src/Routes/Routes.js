import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import {Login,Signup,SuccessPage} from '../components/Auth';
import {Dashboard} from '../pages';


const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/success' element={<SuccessPage/>}/>
            <Route path=':token/dashboard' element={<Dashboard/>}/>

        </Routes>
    </Router>
  )
}

export default AppRoutes;