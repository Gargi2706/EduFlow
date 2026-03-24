import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";

export default function Studentsidebar() {
  return (
    <div className="sidebar">

      <div className="sidebar-top">
        <div className="sidebar-title">Student Panel</div>

        <ul className="links">

          <li>
            <NavLink
              to="/student-dashboard"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/enroll-course"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              Browse Course
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/student-dashboard"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              My Courses
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/student-dashboard"
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              My Reviews
            </NavLink>
          </li>

        </ul>
      </div>

      <div className="sidebar-bottom">
        <button className="logout-btn">Logout</button>
      </div>

    </div>
  );
}