import React from 'react'
import adobe from '../../assets/imageadobe.png'
import { BUY_ROUTE } from '../../constants/route'
import { Link } from 'react-router-dom'
const course={
  title:"Adobe Course",
  description:"this is Adobe courses",
  price:100,

}

const DashboardCard = () => {

  return (
    <div className=" text-black pb-8 rounded-2xl shadow-lg w-full  ">
      <img src={adobe} alt="nodejs" className="rounded-lg w-full h-1/2"/>
     <div className='ml-4 mt-2'>
     <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="text-sm mb-3">{course.description}</p>
      <p className="font-semibold text-lg">Price: ${course.price}</p>
      <Link to='https://sipalaya.com/courses/'>
      <button className="mt-3 bg-sky-300 py-2 px-4 rounded-md font-semibold hover:bg-gray-200 transition-all">
        Syllabus
      </button>
      </Link>
     
   <Link to={BUY_ROUTE}>
   <button className="mt-3 bg-sky-700 ml-4  px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all">
        Purchase
      </button></Link>
     </div>
    </div>
  )
}

export default DashboardCard
