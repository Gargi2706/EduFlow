import React from "react";
import "./sidebar.css";
import { NavLink } from "react-router-dom";

export default function Adminsidebar({isOpen}) {
  return (
    <div className="sidebar">
     <div className={`sidebar-top ${isOpen ? "open" : ""}`}>
        <div className="sidebar-title">Admin Panel</div>
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
            to="/admin/manage-users"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Manage User
          </NavLink>
          <NavLink
            to="/admin/manage-course"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Manage Course
          </NavLink>
          <NavLink
            to="/admin/manage-reviews"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Manage Reviews
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Reports
          </NavLink>
          <NavLink
            to="/"
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
