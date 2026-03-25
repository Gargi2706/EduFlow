import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
export default function StudentSidebar({ isOpen }) {
  return (
    <div className="sidebar">
      <div className={`sidebar-top ${isOpen ? "open" : ""}`}>
        <div className="sidebar-title">Student Panel</div>
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
            Browse Course
          </NavLink>
 
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            My Courses
          </NavLink>
 
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            My Reviews
          </NavLink>
 
 
          {/* <NavLink
            to="/instructor/profile"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Profile
          </NavLink> */}
        </ul>
        </div>
      
      </div>
   
  );
}



      
