import React from "react";

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">Development</h3>
        <h4 className="text-sm">30 July 2025</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">Optimize Database</h2>
      <p className="text-sm mt-2">
        Improve performance of the reporting queries in the dashboard.
      </p>
      <div className="mt-6">
        <button className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs">
          Complete
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
