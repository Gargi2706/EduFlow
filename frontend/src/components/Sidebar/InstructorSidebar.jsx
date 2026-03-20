import React from "react";
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