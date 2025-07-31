import React, { useState } from "react";

const CreateTask = () => {
  const [title, setTaskTitle] = useState("");
  const [description, setTaskDescription] = useState("");
  const [date, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      title,
      description,
      date,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const data = JSON.parse(localStorage.getItem("employees")) || [];

    data.forEach((emp) => {
      if (asignTo === emp.firstName) {
        if (!emp.tasks) emp.tasks = [];
        emp.tasks.push(task);

        // Update taskCount based on current tasks
        const count = {
          active: 0,
          completed: 0,
          failed: 0,
          newTask: 0,
        };

        emp.tasks.forEach((t) => {
          if (t.active) count.active++;
          if (t.completed) count.completed++;
          if (t.failed) count.failed++;
          if (t.newTask) count.newTask++;
        });

        emp.taskCount = count;
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));

    // Reset form
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAsignTo("");
    setCategory("");
  };

  return (
    <div className="mt-10 bg-[#2C2C2C] p-8 rounded-xl text-white mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create New Task</h2>

      <form className="flex gap-10" onSubmit={submitHandler}>
        {/* Left Side */}
        <div className="w-1/2 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-1">Task Title</label>
            <input
              value={title}
              type="text"
              onChange={(e) => setTaskTitle(e.target.value)}
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Date</label>
            <input
              value={date}
              onChange={(e) => setTaskDate(e.target.value)}
              type="date"
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Assign To</label>
            <input
              value={asignTo}
              onChange={(e) => setAsignTo(e.target.value)}
              type="text"
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600"
              placeholder="Employee name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Categories</label>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600"
              placeholder="e.g. Development, Design"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col h-full justify-between">
          <div>
            <label className="block text-sm font-semibold mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setTaskDescription(e.target.value)}
              className="w-full p-2 rounded bg-[#3C3C3C] border border-gray-600 h-[200px]"
              placeholder="Enter task description"
            ></textarea>
          </div>

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
