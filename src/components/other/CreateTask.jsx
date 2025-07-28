import React from "react";

const CreateTask = () => {
  return (
    <div className="mt-10 bg-[#2C2C2C] p-8 rounded-xl text-white mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create New Task</h2>

      <form className="flex gap-10">
        {/* Left Side Fields */}
        <div className="w-1/2 space-y-6">
          {/* Task Title */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Task Title
            </label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600"
              placeholder="Enter task title"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold mb-1">Date</label>
            <input
              type="date"
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600"
            />
          </div>

          {/* Assign To */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Assign To
            </label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600"
              placeholder="Employee name or email"
            />
          </div>

          {/* Categories as Text Input */}
          <div>
            <label className="block text-sm font-semibold mb-1">
              Categories
            </label>
            <input
              type="text"
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600"
              placeholder="e.g. Development, Design, etc."
            />
          </div>
        </div>

        {/* Right Side: Description and Button */}
        <div className="w-1/2 flex flex-col h-full justify-between">
          <div>
            <label className="block text-sm font-semibold mb-1">
              Description
            </label>
            <textarea
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600 h-[200px]"
              placeholder="Enter task description"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6 self-end">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
