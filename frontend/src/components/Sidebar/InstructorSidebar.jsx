import React from 'react'
import "./sidebar.css";
export default function Instructorsidebar({isOpen}) {
  return (
    <div>
     <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-title">Instructor Panel</div>
        <ul>
          <li>Dashboard</li>
          <li>Create Course</li>
          <li>My Courses</li>
          <li>Student Enrolled</li>
          <li>Course Reviews</li>
          <li>Profile</li>
          
        </ul>
        <div className="sidebar-bottom">
        <button className="logout-btn">Logout</button>
      </div>
      </div>
    </div>
  )
}
