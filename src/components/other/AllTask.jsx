import React from "react";

const AllTask = () => {
  return (
    <div className="bg-[#1c1c1c] p-6 rounded-lg mt-10 text-white space-y-4">
      {/* Red Task Box */}
      <div className="bg-red-400 py-3 px-4 flex justify-between items-center rounded-md">
        <h2 className="text-lg font-semibold">Sarthak</h2>
        <h3 className="text-base">Make a UI Design</h3>
        <h5 className="text-sm bg-red-600 text-white px-3 py-1 rounded">
          High
        </h5>
      </div>

      {/* Green Task Box */}
      <div className="bg-green-400 py-3 px-4 flex justify-between items-center rounded-md">
        <h2 className="text-lg font-semibold">Sarthak</h2>
        <h3 className="text-base">API Integration</h3>
        <h5 className="text-sm bg-red-600 text-white px-3 py-1 rounded">
          High
        </h5>
      </div>

      {/* Blue Task Box */}
      <div className="bg-blue-400 py-3 px-4 flex justify-between items-center rounded-md">
        <h2 className="text-lg font-semibold">Sarthak</h2>
        <h3 className="text-base">Fix Bugs</h3>
        <h5 className="text-sm bg-red-600 text-white px-3 py-1 rounded">
          High
        </h5>
      </div>

      {/* Yellow Task Box */}
      <div className="bg-yellow-400 py-3 px-4 flex justify-between items-center rounded-md">
        <h2 className="text-lg font-semibold">Sarthak</h2>
        <h3 className="text-base">Write Docs</h3>
        <h5 className="text-sm bg-red-600 text-white px-3 py-1 rounded">
          High
        </h5>
      </div>
    </div>
  );
};

export default AllTask;
