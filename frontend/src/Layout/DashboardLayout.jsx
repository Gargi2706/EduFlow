import React, { useState, useRef, useEffect } from "react";
 
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
    function handleClickOutside(e) {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
 
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);
 
  const renderSidebar = () => {
    if (role === "student") return <Studentsidebar />;
    if (role === "instructor") return <Instructorsidebar />;
    if (role === "admin") return <Adminsidebar />;
    return <Sidebar />;
  };
 
  return (
    <>
      <Navbar setOpen={setOpen} open={open} />
 
      <div className={`layout ${open ? "open" : ""}`}>
 
        <div className="sidebar" ref={sidebarRef}>
          {renderSidebar()}
        </div>
 
        <div className="content">
          {children}
        </div>
 
      </div>
    </>
  );
}