import React from "react";
import "./adminDashboard.css";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="dashboard-container">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2 className="logo">EduFlow</h2>

        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Courses</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">

        {/* HEADER */}
        <div className="header">
          <h2>Welcome, {user?.name || "Admin"} 👋</h2>

          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* CARDS */}
        <div className="cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>250</p>
          </div>

          <div className="card">
            <h3>Total Courses</h3>
            <p>40</p>
          </div>

          <div className="card">
            <h3>Total Instructors</h3>
            <p>15</p>
          </div>
        </div>

        {/* SECTION */}
        <div className="section">
          <h3>Recent Activities</h3>

          <div className="activity-list">
            <div className="activity-card">
              <p>New user registered</p>
            </div>

            <div className="activity-card">
              <p>New course added</p>
            </div>

            <div className="activity-card">
              <p>Instructor updated course</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}