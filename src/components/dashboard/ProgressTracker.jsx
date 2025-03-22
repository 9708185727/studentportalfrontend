import React from "react";
const ProgressTracker = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-2 gap-y-2 ">
      <div className="bg-gradient-to-r flex from-sky-900 w-full to-sky-400 h-32  rounded-lg px-7 py-8">
        <div>
          <h1 className="text-lg text-white font-bold">My Courses</h1>
          <p className="text-sm text-white">Total</p>
        </div>
        <p className="text-white text-3xl font-bold ml-16">4</p>
        
      </div>
      <div className="bg-gradient-to-r flex  from-purple-900  to-purple-400 h-32 w-full rounded-lg px-7 py-8">
        <div>
          <h1 className="text-lg text-white font-bold">Certificate Earned</h1>
          <p className="text-sm text-white">Total</p>
        </div>
        <p className="text-white text-3xl font-bold ml-16">3</p>
      </div>
      <div className="bg-gradient-to-r flex from-red-900  to-red-400 h-32 w-full rounded-lg px-7 py-8">
        <div>
          <h1 className="text-lg text-white font-bold">Upcoming Classes</h1>
          <p className="text-sm text-white">Total</p>
        </div>
        <p className="text-white text-3xl font-bold ml-16">2</p>
      </div>
      <div className="bg-gradient-to-r flex from-blue-900  to-blue-700 h-32 w-full rounded-lg px-7 py-8">
        <div>
          <h1 className="text-lg text-white font-bold">Wallet</h1>
          <p className="text-sm text-white">current</p>
        </div>
        <p className="text-white text-3xl font-bold ml-16">56</p>
      </div>
    </div>
  );
};

export default ProgressTracker;
