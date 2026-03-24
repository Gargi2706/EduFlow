import React from 'react'
import "./sidebar.css";
import StudentSidebar from "./Studentsidebar";
import InstructorSidebar from "./Instructorsidebar";
import AdminSidebar from "./Adminsidebar";  
 
 
export default function Sidebar({role}) {
  return (
    <div>
      {role === "Student" && <StudentSidebar />}
      {role === "Instructor" && <InstructorSidebar />}
      {role === "Admin" && <AdminSidebar />}
    </div>
  )
}