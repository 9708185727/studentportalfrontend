import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import { useSelector } from 'react-redux'
import SideBar from '../components/SideBar'

const MainLayouts = () => {
  
    const [isOpen,setOpen]=useState(true)
    const {user}=useSelector((state)=>state.auth)
  return (
    <div>
      <Navbar isOpen={isOpen} setOpen={setOpen}/>
    {user? <div className='flex flex-col  sm:flex-col md:flex-row lg:flex-row xl:flex-row'>
     <SideBar isOpen={isOpen} setOpen={setOpen}/>
 
   <div className='w-full '>
    <Header/>
    <Outlet className=""/>
   </div>
   
    
 
     </div>: <Outlet/>}
    
    </div>
  )
}

export default MainLayouts
