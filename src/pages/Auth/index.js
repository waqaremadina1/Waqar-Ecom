import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import ForgotPassword from './ForgotPassword'

export default function Auth() {
    return (
        <Routes>
            <Route path='login' index element={<Login/>} />
            <Route path='register' element={<Register />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
        </Routes>
    )
}
