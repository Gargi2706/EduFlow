import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Studentsidebar from "../components/Sidebar/Studentsidebar";
import Adminsidebar from "../components/Sidebar/Adminsidebar";
import Instructorsidebar from "../components/Sidebar/Instructorsidebar";
import "./dashboardLayout.css";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const role = user?.role?.toLowerCase() || "student";

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ✅ SINGLE clean function
  const renderSidebar = () => {
    if (role === "student") return <Studentsidebar />;
    if (role === "instructor") return <Instructorsidebar />;
    if (role === "admin") return <Adminsidebar />;
    return <Sidebar />;
  };

  return (
    <>
      <Navbar setOpen={setOpen} open={open} />

      <div className="layout">
        {/* Sidebar */}
        <div className={`sidepanel ${open ? "open" : ""}`} ref={sidebarRef}>
          {renderSidebar()}
        </div>

        {/* Main Content */}
        <div className={`main-content ${open ? "shift" : ""}`}>
          {children}
        </div>
      </div>
    </>
  );
}