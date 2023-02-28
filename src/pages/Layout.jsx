import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div>
        <Sidebar />
      </div>
      <div className="p-4 sm:ml-64 sm:h-screen">
        <div className="p-10 border-2 h-auto border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
