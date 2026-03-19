import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Studentsidebar from '../components/Sidebar/Studentsidebar';
import Adminsidebar from '../components/Sidebar/Adminsidebar';
import Instructorsidebar from '../components/Sidebar/Instructorsidebar';

import { useState } from 'react';

export default function DashboardLayout({children}) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const role = "instructor"; 

  // const role = localStorage.getItem("role"); 
  // student / instructor / admin

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev); ;
  };

  const renderSidebar = () => {

    if (role === "student") return < Studentsidebar isOpen={sidebarOpen} />;

    if (role === "instructor") return <Instructorsidebar isOpen={sidebarOpen} />;

    if (role === "admin") return <Adminsidebar isOpen={sidebarOpen} />;

  };


  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} />
        {renderSidebar()}
        <div className="main-content">
        {children}
    </div>
    </div>
   
  )
}
