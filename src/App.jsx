// src/App.jsx

import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import { AuthContext } from "./components/context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser.role);
      setLoggedInUserData(parsedUser.data || null);
    }
  }, []);

  const handleLogin = (email, password) => {
    if (authData?.admin?.length) {
      const adminUser = authData.admin.find(
        (item) => item.admin.email === email && item.admin.password === password
      );
      if (adminUser) {
        setUser("admin");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "admin", data: adminUser.admin })
        );
        return;
      }
    }

    if (authData?.employees?.length) {
      const employee = authData.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
        return;
      }
    }

    alert("Invalid Credentials");
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
