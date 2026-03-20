import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Studentsidebar from '../components/Sidebar/Studentsidebar';
import Adminsidebar from '../components/Sidebar/Adminsidebar';
import Instructorsidebar from '../components/Sidebar/Instructorsidebar';
import './dashboardLayout.css';

const DashboardLayout = ({ children }) => {

  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

  const role = "instructor"; // define before use

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
      <Navbar setOpen={setOpen} open={open} />

      {open && (
        <div ref={sidebarRef}>
          {renderSidebar()}
        </div>
      )}

      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;