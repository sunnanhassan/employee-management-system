// src/components/context/AuthProvider.jsx

import React, { createContext, useState, useEffect } from "react";
import { getLocalStorage, setLocalStorage } from "../../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLocalStorage(); // Sets initial localStorage data if not already present
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
    setLoading(false);
  }, []);

  if (loading) return <div>Loading...</div>; // Optional loading UI

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
