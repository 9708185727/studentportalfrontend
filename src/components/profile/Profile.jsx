
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducer/auth/authSlice';
import { FaPerson } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';


const UserProfile = ({setProfileOpen}) => {
  const dispatch = useDispatch();

  return (
    // <div className="flex justify-center items-center h-screen bg-gray-100">
   
      <div className="bg-white p-4 rounded-2xl shadow-lg w-56  text-center">
      <button onClick={()=>setProfileOpen(false)} className='w-full flex items-end justify-end'>  <RxCross2 className='text-lg text-red-500' /></button>
        <FaPerson className="w-16 h-16 mx-auto text-gray-500" />
        <h2 className="text-xl font-semibold mt-4">User Profile</h2>
        <p className="text-gray-600">Welcome to your profile!</p>
        <button 
          className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div>
    // </div>
  );
};

export default UserProfile;

