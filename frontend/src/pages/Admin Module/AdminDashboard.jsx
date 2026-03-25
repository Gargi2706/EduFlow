import React from "react";
import '../../styles/adminDashboard.css'
// import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";

export default function AdminDashboard({ user }) {
  // const navigate = useNavigate();

  // const user = JSON.parse(localStorage.getItem("user"));

  // // const handleLogout = () => {
  // //   localStorage.removeItem("token");
  // //   localStorage.removeItem("user");
  // //   navigate("/");
  // // };

  return (
    <div>
      <DashboardLayout>
        {/* MAIN CONTENT */}
        <div className="dashboard-container">
          {/* HEADER */}
          <div className="header">
            <h2>Welcome, {user?.name || "Admin"} 👋</h2>
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
      </DashboardLayout>
    </div>
  );
}
