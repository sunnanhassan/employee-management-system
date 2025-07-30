import React from "react";
import Header from "../../other/Header";
import TaskListNumbers from "../../other/TaskListNumbers";
import Tasklist from "../../TaskList/Tasklist";
import AdminDashboard from "./AdminDashboard";

const EmployeeDashboard = ({data}) => {
  console.log(data);
  
  return (
    <div className="h-screen w-full p-7">
      
      <Header data={data} />
      <TaskListNumbers data={data} />
      <Tasklist data={data} />
    </div>
  );
};

export default EmployeeDashboard;
