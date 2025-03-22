import { IoMdHome } from "react-icons/io";

import { FaUser, FaBook, FaCertificate, FaShoppingCart, FaServer, FaWallet, FaCalendarAlt, FaLock } from "react-icons/fa";

import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { GrHomeRounded } from "react-icons/gr";
import { BsSoundwave } from "react-icons/bs";
import { PiBookOpenTextDuotone } from "react-icons/pi";
import { 
    ATTENDANCE_ROUTE,
  BATCH_ROUTE,
  BUY_ROUTE, CERTIFICATES_ROUTE, COURSES_ROUTE, DASHBOARDADMIN_ROUTE, DASHBOARDSTUDENT_ROUTE, DOMAIN_ROUTE, 
  EVENTS_ROUTE, HOME_ROUTE, LOGIN_ROUTE, NOTIFICATION_ROUTE, PROFILE_ROUTE, REGISTER_ROUTE, REPORT_ROUTE, SETTING_ROUTE, TERMSANDCONTDITON_ROUTE, WALLET_ROUTE 
} from "./route";

const navMenu = [
    {
        label: "Dashboard",
        route: DASHBOARDSTUDENT_ROUTE,
        icon: IoMdHome, // Use function reference instead of JSX
        isAuth:true,
    },
    {
        label: "My Courses",
        route: COURSES_ROUTE,
        icon: FaBook,
        isAuth:true,
    },
    {
        label: "Certificates",
        route: CERTIFICATES_ROUTE,
        icon: FaCertificate,
        isAuth:true,
    },
    {
        label: "Buy Course",
        route: BUY_ROUTE,
        icon: FaShoppingCart,
        isAuth:true,
    },
    {
        label: "Buy Domain & Hosting",
        route: DOMAIN_ROUTE,
        icon: FaServer,
        isAuth:true,
    },
    {
        label: "Wallets",
        route: WALLET_ROUTE,
        icon: FaWallet,
        isAuth:true,
    },
    {
        label: "Events",
        route: EVENTS_ROUTE,
        icon: FaCalendarAlt,
        isAuth:true,
    },
    {
        label: "Terms & Conditions",
        route: TERMSANDCONTDITON_ROUTE,
        icon: FaLock,
        isAuth:true,
    },
    {
        label: "Change Password",
        route: PROFILE_ROUTE,
        icon: FaUser,
        isAuth:true,
    }
];

const authMenu = [
    {
        label: "Home",
        route:HOME_ROUTE,
        
    },
    {
        label: "Sign In",
        route:LOGIN_ROUTE,

    },
   
];

const navMenuAdmin = [
    {
        label: "Dashboard",
        route:DASHBOARDADMIN_ROUTE,
        icon:GrHomeRounded , // Use function reference instead of JSX
  
    },
    {
        label: "My Courses",
        route: COURSES_ROUTE,
        icon: FaBook,
        isAuth:true,
    },
    {
        label: "My Batches",
        route:BATCH_ROUTE,
        icon:PiBookOpenTextDuotone,
     
    },
    {
        label: "Attendance",
        route: ATTENDANCE_ROUTE,
        icon:TfiWrite,
      
    },
    {
        label: "Report",
        route: REPORT_ROUTE,
        icon:BsSoundwave,
     
    },
   
    {
        label: "Notifications",
        route:NOTIFICATION_ROUTE,
        icon:MdOutlineNotificationsActive,
       
    },
    {
        label: "Setting",
        route:SETTING_ROUTE,
        icon:IoSettingsOutline,
      
    },

];



export { navMenu, authMenu,navMenuAdmin };
