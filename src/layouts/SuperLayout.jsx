import React from 'react'
import { Outlet } from 'react-router-dom'

const SuperLayout = () => {
  return (
    <div>
      <Outlet/>
    </div>
  )
}

export default SuperLayout
