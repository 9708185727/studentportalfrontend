import React from "react";
import { NavLink } from "react-router-dom";

import { navMenu } from "../constants/navMenu";
import { FaArrowLeft } from "react-icons/fa";
import sidebar from "../assets/siplogo.png";
import { changeContent } from "../reducer/headerSlice";
import { useDispatch, useSelector } from "react-redux";

const SideBar = ({ isOpen, setOpen }) => {
  const dispatch = useDispatch();
 

  return (
    <>
      <aside className={`w-auto sm:min-w-60 md:min-w-60 lg:min-w-60  h-full bg-white  text-white p-5 shadow-2xl relative ${isOpen ? "block" : "hidden"}`}>
        <button onClick={() => setOpen(false)} className="absolute top-6 right-3 hidden sm:hidden md:block lg:block xl:block">
          <FaArrowLeft className="text-black text-sm " />
        </button>

        <img src={sidebar} alt="logo" className=" w-full ps-0 h-12 border-b mb-4 " />

        <ul className="">
          {navMenu.map((menu) => {
            const Icon = menu.icon;
            return (
              <li key={menu.route} className="mb-4 flex items-center text-black hover:bg-sky-100 hover:px-6 px-6">
                <button
                  onClick={() => dispatch(changeContent(menu.label))}
                  className="flex items-center w-full text-left"
                >
                  <span className="mr-2 text-xl">
                    <Icon />
                  </span>
                  <NavLink to={menu.route} className="hover:text-gray-400 py-2 ">
                    {menu.label}
                  </NavLink>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </>
  );
};

export default SideBar;
