<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Studentsidebar from '../components/Sidebar/Studentsidebar';
import Adminsidebar from '../components/Sidebar/Adminsidebar';
import Instructorsidebar from '../components/Sidebar/Instructorsidebar';
import './dashboardLayout.css';

const DashboardLayout = ({ children }) => {
=======
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Studentsidebar from "../components/Sidebar/Studentsidebar";
import Adminsidebar from "../components/Sidebar/Adminsidebar";
import Instructorsidebar from "../components/Sidebar/Instructorsidebar";
import { useEffect } from "react";
import "./dashboardLayout.css";
import { useState, useRef } from "react";
>>>>>>> b9fb3835417bbd6ee9ac8e0cb70b4c5ac1a1f394

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

<<<<<<< HEAD
  const role = "instructor"; // define before use

=======
>>>>>>> b9fb3835417bbd6ee9ac8e0cb70b4c5ac1a1f394
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
<<<<<<< HEAD
=======

>>>>>>> b9fb3835417bbd6ee9ac8e0cb70b4c5ac1a1f394
    if (role === "instructor") return <Instructorsidebar isOpen={open} />;
    if (role === "admin") return <Adminsidebar isOpen={open} />;
<<<<<<< HEAD
    return null;
  };
=======
  };
  const role = "instructor";
>>>>>>> b9fb3835417bbd6ee9ac8e0cb70b4c5ac1a1f394

  return (
    <div>
      <Navbar setOpen={setOpen} open={open} />

<<<<<<< HEAD
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
=======
      <div className="main-body">
        {open && <div ref={sidebarRef}>{renderSidebar()}</div>}

        <div className="main-content">{children}</div>
      </div>
    </div>
  );
}
>>>>>>> b9fb3835417bbd6ee9ac8e0cb70b4c5ac1a1f394
