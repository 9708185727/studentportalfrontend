import React from "react";
import nodejs from '../../assets/coursesimages/nodejs.png'
import { CLASSCONTENT_ROUTE } from "../../constants/route";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeContent } from "../../reducer/headerSlice";
import PostClassVideo from "./PostClassVideo";
const course={
    title:"Node Js",
}
const CourseCard = () => {
  const dispatch=useDispatch()
  return (
    <div className="pb-4 rounded-2xl shadow-lg  w-full ">
      
      <img src={nodejs} alt="nodejs" className="rounded-lg"/>
      <h2 className="text-xl  mb-2 text-black ml-6 mt-5">{course.title}</h2>
      <Link to={CLASSCONTENT_ROUTE}>
      <button onClick={()=>dispatch(changeContent("class-content"))} className="mt-3 ml-6 text-black bg-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all">
       Watch Videos
      </button>
      
      </Link>
    </div>
  );
};

export default CourseCard;

