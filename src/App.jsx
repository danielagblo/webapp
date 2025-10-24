import React from 'react'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import ResetPassword from './Pages/ResetPassword'
import RestPassword from './Pages/ResetPasswordPhone'
import ReferalCode from './Pages/ReferalCode'
import OPTLogin from './Pages/OPTLogin'
import ResetMessage from './Pages/ResetMessage'
import HomePage from './Pages/HomePage'
import Filter from './Pages/FilterPage'


export default function App() {
  const router =  createBrowserRouter(createRoutesFromElements(
         <Route path='/'>
          <Route index  element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/resetpassword' element={<ResetPassword/>} />
          <Route path='/resetpasswordphone' element={<RestPassword/>} />
          <Route path='/verifyaccount' element={<ReferalCode/>} />
          <Route path='/optlogin' element={<OPTLogin/>} />
          <Route path='/resetmessage' element={<ResetMessage/>} />
        {/* the actual route for the home page  */}
        <Route path='/homepage' element={<HomePage/>} />
        <Route path='/info' element={<Filter/>} />
         </Route>
  ))
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}
