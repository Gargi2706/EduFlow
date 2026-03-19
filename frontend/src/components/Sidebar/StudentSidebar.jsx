import React from "react";
import "./sidebar.css";

export default function Studentsidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-title">Student Panel</div>
        <ul>
          <li>Dashboard</li>
          <li>Browse Course</li>
          <li>My Courses</li>
          <li>My Reviews</li>
          <li>Profile</li>
          
        </ul>
        <div className="sidebar-bottom">
        <button className="logout-btn">Logout</button>
      </div>
      </div>
    </div>
  );
}
