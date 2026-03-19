import React from "react";
import { Link } from "react-router-dom";
import "./DashboardLayout.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2 className="logo">EduFlow</h2>

        <ul>
          <li>
            <Link to="/instructor-dashboard">Dashboard</Link>
          </li>

          <li>
            <Link to="/create-course">Create Course</Link>
          </li>

          <li>My Courses</li>
          <li>Students</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        {children}
      </div>

    </div>
  );
}