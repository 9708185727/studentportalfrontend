import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import {LOGIN_ROUTE } from '../constants/route'

const AuthLayout = () => {
    const {user}=useSelector((state)=>state.auth)
  return <div> {user?<Outlet/>:<Navigate to={LOGIN_ROUTE}/>}</div>
}

export default AuthLayout
