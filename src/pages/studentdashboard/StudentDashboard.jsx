import React, { useEffect } from "react";
import ProgressTracker from "../../components/dashboard/ProgressTracker";

import DashboardCard from "../../components/dashboard/Dashboard";


const StudentDashboard = () => {

  return (
    <>
      <div className=" px-5 py-6 w-full space-y-3 ">
        <h2 className="text-2xl font-semibold mt-0 mb-6">
          Welcome to the Dashboard
        </h2>
        <ProgressTracker />
        <p className="text-3xl font-semibold text-gray-500">Upcoming Classes</p>
        <p className="text-black text-xl">Your Referral Code: RCODE1149 </p>
        <p>
          Get 2% instant cashback on your Sipalaya digital wallet when
          purchasing this course and
        </p>
        <p>
          Get 1% instant cashback when reffering this course with your referral
          code.
        </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-2 gap-y-2">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard/>
          <DashboardCard/>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
