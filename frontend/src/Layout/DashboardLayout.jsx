<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';
import Studentsidebar from '../components/Sidebar/Studentsidebar';
import Adminsidebar from '../components/Sidebar/Adminsidebar';
import Instructorsidebar from '../components/Sidebar/Instructorsidebar';
import './dashboardLayout.css';
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
import SidebarDev from "../components/Sidebar_dev";
import MianContainer from "../components/MainContent";
>>>>>>> b3abe412cd8aa0f0809c45a97e1b398092f2e819

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
<<<<<<< HEAD
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
=======
    <div className="page-layout">
      <Navbar setOpen={setOpen} open={open} />

      <div className="layout">
        <div className={`sidepanel ${open ? "open" : ""}`} ref={sidebarRef}>
          {open && <div ref={sidebarRef}>{renderSidebar()}</div>}
        </div>
        <div className="main-content">{children}</div>
>>>>>>> b3abe412cd8aa0f0809c45a97e1b398092f2e819
      </div>
      {/* <div className="layoutdev">
        {open && <SidebarDev />}
        <MianContainer open={open} />
      </div> */}
    </div>
  );
}