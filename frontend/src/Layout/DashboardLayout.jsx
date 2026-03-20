import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Studentsidebar from '../components/Sidebar/Studentsidebar';
import Adminsidebar from '../components/Sidebar/Adminsidebar';
import Instructorsidebar from '../components/Sidebar/Instructorsidebar';
import { useEffect } from 'react';
import './dashboardLayout.css'
import { useState , useRef } from 'react';

  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [open, setOpen] = useState(false);
  const sidebarRef = useRef();

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

    if (role === "student") return < Studentsidebar isOpen={open} />;

    if (role === "instructor") return <Instructorsidebar isOpen={open} />;

    if (role === "admin") return <Adminsidebar isOpen={open} />;

  };
  const role = "instructor";

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
