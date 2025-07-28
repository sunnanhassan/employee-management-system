import React from "react";

const Tasklist = () => {
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-start gap-5 flex-nowrap w-full py-5 bg-[#1C1C1C] mt-10 px-5"
    >
      {/* Card 1 - High Priority (Red) */}
      <div
        className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl"
        style={{ backgroundColor: "#FF6368" }}
      >
        <div className="flex justify-between items-center">
          <span className="bg-red-600 text-sm px-3 py-1 rounded text-white">
            High
          </span>
          <span className="text-sm text-white">20 Feb 2025</span>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white">Fix Landing Page</h2>
        <p className="text-sm mt-2 text-white">
          Resolve layout bugs on the landing page and test responsiveness across
          devices.
        </p>
      </div>

      {/* Card 2 - Medium Priority (Blue) */}
      <div
        className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl"
        style={{ backgroundColor: "#51A2FF" }}
      >
        <div className="flex justify-between items-center">
          <span className="bg-blue-600 text-sm px-3 py-1 rounded text-white">
            Medium
          </span>
          <span className="text-sm text-white">22 Feb 2025</span>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white">
          Update Documentation
        </h2>
        <p className="text-sm mt-2 text-white">
          Add usage examples and API references to the internal docs.
        </p>
      </div>

      {/* Card 4 - Medium Priority (Yellow) */}
      <div
        className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl"
        style={{ backgroundColor: "#FDC800" }}
      >
        <div className="flex justify-between items-center">
          <span className="bg-yellow-500 text-sm px-3 py-1 rounded text-black">
            Medium
          </span>
          <span className="text-sm text-black">28 Feb 2025</span>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-black">
          Prepare Presentation
        </h2>
        <p className="text-sm mt-2 text-black">
          Finalize slides and talking points for the monthly team meeting.
        </p>
      </div>

      {/* Card 3 - Low Priority (Green) */}
      <div
        className="flex-shrink-0 h-full w-[300px] p-5 rounded-xl"
        style={{ backgroundColor: "#05DF73" }}
      >
        <div className="flex justify-between items-center">
          <span className="bg-green-600 text-sm px-3 py-1 rounded text-white">
            Low
          </span>
          <span className="text-sm text-white">25 Feb 2025</span>
        </div>
        <h2 className="mt-5 text-2xl font-bold text-white">Clean Codebase</h2>
        <p className="text-sm mt-2 text-white">
          Refactor unused components and remove dead code.
        </p>
      </div>
    </div>
  );
};

export default Tasklist;
