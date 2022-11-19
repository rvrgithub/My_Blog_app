import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Admin } from '../../Pages/Admin';
import { Home } from '../../Pages/Home/Home';
import { Login } from '../../Pages/Login/Login';
import { Register } from '../../Pages/Register/Register';
import { SingleBlog } from '../../Pages/SingleBlog/SingleBlog';
import { CreateBlog } from '../Create Blog/CreateBlog';


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/blog' element={<CreateBlog/>}/>
        <Route path='/blog/id' element={<SingleBlog/>}/>
    </Routes>
  )
}
