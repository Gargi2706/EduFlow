import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
export default function Instructorsidebar({ isOpen }) {
  return (
    <div className="sidebar">
      <div className={`sidebar-top ${isOpen ? "open" : ""}`}>
        <div className="sidebar-title">Instructor Panel</div>
        <ul className="links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/instructor/create-course"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Create Course
          </NavLink>

          <NavLink
            to="/instructor/manage-course"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            My Course
          </NavLink>

          <NavLink
            to="/instructor/students-enrolled"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Student Enrolled
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Course Review
          </NavLink>

          <NavLink
            to="/instructor/profile"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Profile
          </NavLink>
        </ul>
        </div>
        <div className="sidebar-bottom">
          <button className="logout-btn">Logout</button>
        </div>
      </div>
   
  );
}
