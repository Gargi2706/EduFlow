import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Studentsidebar from '../components/Sidebar/Studentsidebar';
import Adminsidebar from '../components/Sidebar/Adminsidebar';
import Instructorsidebar from '../components/Sidebar/Instructorsidebar';
import './dashboardLayout.css';

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  const role = "instructor"; // later replace with dynamic role

  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderSidebar = () => {
    if (role === "student") return <Studentsidebar isOpen={open} />;
    if (role === "instructor") return <Instructorsidebar isOpen={open} />;
    if (role === "admin") return <Adminsidebar isOpen={open} />;
    return null;
  };

  return (
    <div>
      {/* NAVBAR */}
      <Navbar setOpen={setOpen} open={open} />

      {/* SIDEBAR */}
      {open && (
        <div ref={sidebarRef}>
          {renderSidebar()}
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="main-content">
        {children}
      </div>
    </div>
  );
}