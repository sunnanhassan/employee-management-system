import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Auth/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Auth/Dashboard/AdminDashboard";
import { AuthContext } from "./components/context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);

  const handleLogin = (email, password) => {
    if (email === "admin123@gmail.com" && password === "123") {
      setUser("admin");
      console.log("This is Admin");
    } else if (
      authData &&
      authData.employees && // ✅ Fixed typo: "emplyees" → "employees"
      authData.employees.find(
        (e) => e.email === email && password === e.password
      )
    ) {
      setUser("user");
      console.log("This is Special User");
    } else {
      alert("Invalid User");
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === "admin" && <AdminDashboard />}
      {user === "user" && <EmployeeDashboard />}
    </>
  );
};

export default App;
