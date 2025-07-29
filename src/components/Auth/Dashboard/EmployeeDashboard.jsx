import React from "react";
import Header from "../../other/Header";
import TaskListNumbers from "../../other/TaskListNumbers";
import Tasklist from "../../TaskList/Tasklist";
import AdminDashboard from "./AdminDashboard";

const EmployeeDashboard = () => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <TaskListNumbers />
      <Tasklist />
    </div>
  );
};

export default EmployeeDashboard;
