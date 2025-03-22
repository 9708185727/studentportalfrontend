import React from "react";
import { authMenu } from "../constants/navMenu";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { PiGreaterThanThin} from "react-icons/pi";
import { DASHBOARDSTUDENT_ROUTE, HOME_ROUTE } from "../constants/route";
import { useSelector } from "react-redux";

const Header = () => {
  const {label}=useSelector((state)=>state.headerContent)
  return (
    <>
      <nav className="bg-gray-50 py-4 px-6 flex items-center  space-x-1 border-b">
        <h1 className="text-2xl">{label}</h1>

        <Link to={ DASHBOARDSTUDENT_ROUTE}>
          <IoMdHome className="text-2xl"/> 
        </Link>
        <Link to={ DASHBOARDSTUDENT_ROUTE}>
        <span>Home</span>
        </Link>
       
        <PiGreaterThanThin className="mt-1" />
        <h1 className="text-sm">{label}</h1>
      </nav>
    </>
  );
};

export default Header;
