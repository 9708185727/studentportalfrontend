import React from 'react'
import CourseCard from '../../../components/courses/CoursesCard'
import { useNavigate } from 'react-router-dom'
import { POSTVIDEO_ROUTE } from '../../../constants/route'
import { useSelector } from 'react-redux'


const Courses = () => {
  const navigate =useNavigate()
  const {user}= useSelector((state)=>state.auth)
  return (
    <>
    <div className="p-6 w-full">
    <h2 className=" mt-0 mb-6 flex justify-between">
         <h1 className='text-2xl font-semibold'> Welcome to Your Courses Video</h1>
         
           {user && user._doc?.roles.includes('ADMIN') && (
            <button  className="bg-blue-400 py-2 px-3 rounded-2xl hover:bg-indigo-400" onClick={()=>navigate(POSTVIDEO_ROUTE)}>Add Video</button>
)}
        </h2>
         
        
    <p className="text-lg text-gray-500 mb-4">Did you miss class? No worries, you may watch the class video whenever and wherever it's convenient for you.</p>
  
  
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-2 gap-y-2'>
    <CourseCard/>
    
    </div>
  </div>
    </>
  )
}

export default Courses
