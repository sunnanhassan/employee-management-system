import React, { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const AllTask = () => {
  const userData = useContext(AuthContext);

  if (!userData) return null;

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 text-white">
      {/* Header Row */}
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded text-black">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>

      {/* Employee Task Rows */}
      <div>
        {userData.employees?.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded"
          >
            <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
            <h3 className="text-lg font-medium w-1/5 !text-blue-400">
              {elem.taskCount?.newTask || 0}
            </h3>
            <h5 className="text-lg font-medium w-1/5 !text-yellow-400">
              {elem.taskCount?.active || 0}
            </h5>
            <h5 className="text-lg font-medium w-1/5 !text-green-400">
              {elem.taskCount?.completed || 0}
            </h5>
            <h5 className="text-lg font-medium w-1/5 !text-red-500">
              {elem.taskCount?.failed || 0}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
