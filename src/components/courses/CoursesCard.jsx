import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { changeContent } from "../../reducer/headerSlice";
import nodejs from "../../assets/coursesimages/nodejs.png";
import reactjs from "../../assets/coursesimages/reactjs.png";
import { CLASSCONTENT_ROUTE } from "../../constants/route";

const CourseCard = () => {
  const dispatch = useDispatch();

  const courses = [
    { name: "reactjs", image: reactjs },
    { name: "nodejs", image: nodejs }
  ];

  return (
    <>
      {courses.map((course, index) => (
        <div key={index} className="pb-4 rounded-2xl shadow-lg w-full">
          <img src={course.image} alt={course.name} className="rounded-lg" />
          <h2 className="text-xl mb-2 text-black ml-6 mt-5">{course.name}</h2>
          <Link to={`${CLASSCONTENT_ROUTE}?subject=${encodeURIComponent(course.name)}`}>
            <button
              onClick={() => dispatch(changeContent("class-content"))}
              className="mt-3 ml-6 text-black bg-blue-500 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition-all"
            >
              Watch Videos
            </button>
          </Link>
        </div>
      ))}
    </>
  );
};

export default CourseCard;
