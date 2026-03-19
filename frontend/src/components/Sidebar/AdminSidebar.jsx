import React from 'react'
import "./sidebar.css";

export default function Adminsidebar() {
  return (
    <div>
      <div className="sidebar">
        <div className="sidebar-title">Admin Panel</div>
        <ul>
          <li>Dashboard</li>
          <li>Manage User</li>
          <li>Manage Course</li>
          <li>Manage Reviews</li>
          <li>Reports</li>
          <li>Profile</li>
         
        </ul>
        <div className="sidebar-bottom">
        <button className="logout-btn">Logout</button>
      </div>
      </div>
    </div>
  )
}
