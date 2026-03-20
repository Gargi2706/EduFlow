import React from "react";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import "./sidebar.css";

export default function Instructorsidebar({ isOpen }) {

  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>

      <div className="sidebar-title">Instructor Panel</div>

      <ul>
        <li onClick={() => navigate("/instructor-dashboard")}>
          Dashboard
        </li>

        <li onClick={() => navigate("/create-course")}>
          Create Course
        </li>

        <li>My Courses</li>
        <li>Student Enrolled</li>
        <li>Course Reviews</li>
        <li>Profile</li>
      </ul>

      <div className="sidebar-bottom">
        <button className="logout-btn">Logout</button>
      </div>

    </div>
  );
}
=======
import { NavLink } from "react-router-dom";
import "./sidebar.css";
export default function Instructorsidebar({ isOpen }) {
  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
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
            to="/"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Create Course
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            My Course
          </NavLink>

          <NavLink
            to="/"
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
            to="/"
            className={({ isActive }) =>
              isActive ? "link active-link" : "nav-link"
            }
          >
            Profile
          </NavLink>
        </ul>
        <div className="sidebar-bottom">
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> a564dcfa73b607465fd71ed784db4a9d9da008f8
