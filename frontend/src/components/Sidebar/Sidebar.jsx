import React from 'react'
import "./sidebar.css";
import StudentSidebar from "../StudentSidebar";
import InstructorSidebar from "../InstructorSidebar";   
import AdminSidebar from "../AdminSidebar"; 


export default function Sidebar({role}) {
  return (
    <div>
      {role === "student" && <StudentSidebar />}
      {role === "instructor" && <InstructorSidebar />}
      {role === "admin" && <AdminSidebar />}
    </div>
  )
}
