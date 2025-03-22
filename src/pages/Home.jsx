import React from "react";

import { useNavigate } from "react-router-dom";
import {DASHBOARDADMIN_ROUTE, LOGIN_ROUTE } from "../constants/route";

const HomePage = () => {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-lg w-full p-8 bg-white shadow-xl rounded-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Sipalaya</h1>
      <h2 className="my-4 font-semibold text-xl">Home page</h2>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate(LOGIN_ROUTE)}
            className="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Admin Page
          </button>

          <button
            onClick={() => navigate(LOGIN_ROUTE)}
            className="bg-green-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
          >
            Student Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;