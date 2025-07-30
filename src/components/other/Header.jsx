import React from "react";

const logoutuser = () => {
  localStorage.setItem("loggedInUser", "");
  window.location.reload();
};

const Header = ({ data }) => {
  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {data?.firstName || "Admin"} 👋
        </span>
      </h1>
      <button
        onClick={logoutuser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
