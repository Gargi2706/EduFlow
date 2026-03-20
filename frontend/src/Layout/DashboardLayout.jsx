import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Studentsidebar from "../components/Sidebar/Studentsidebar";
import Adminsidebar from "../components/Sidebar/Adminsidebar";
import Instructorsidebar from "../components/Sidebar/Instructorsidebar";
//import "./dashboardLayout.css";

export default function DashboardLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(true);

  // later you can use localStorage
  const role = "instructor";

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  const renderSidebar = () => {
    if (role === "student") return <Studentsidebar isOpen={sidebarOpen} />;
    if (role === "instructor") return <Instructorsidebar isOpen={sidebarOpen} />;
    if (role === "admin") return <Adminsidebar isOpen={sidebarOpen} />;
  };

  return (
    <div className="layout-container">

      {/* NAVBAR */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* BODY */}
      <div className="layout-body">

        {/* SIDEBAR */}
        {renderSidebar()}

        {/* MAIN CONTENT */}
        <div className="main-content">
          {children}
        </div>

      </div>
    </div>
  );
}