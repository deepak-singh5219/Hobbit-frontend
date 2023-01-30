import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import {Route,Routes} from 'react-router-dom'
import {Login,Signup,SuccessPage} from '../components/Auth';


const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/success' element={<SuccessPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes;