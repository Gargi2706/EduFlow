import React from "react";
import "./instructorDashboard.css";
import DashboardLayout from "../../Layout/DashboardLayout";

export default function InstructorDashboard() {
  return (
    <DashboardLayout>

      {/* Main Content */}
      <div className="main-content">

        {/* Header */}
        <div className="header">
          <h2>Welcome, Instructor 👋</h2>
        </div>

        {/* Cards */}
        <div className="cards">
          <div className="card">
            <h3>Total Courses</h3>
            <p>5</p>
          </div>

          <div className="card">
            <h3>Total Students</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Revenue</h3>
            <p>₹15,000</p>
          </div>
        </div>

        {/* Section */}
        <div className="section">
          <h3>Your Courses</h3>

          <div className="course-list">
            <div className="course-card">
              <h4>React Basics</h4>
              <p>Students: 40</p>
            </div>

            <div className="course-card">
              <h4>Node.js Mastery</h4>
              <p>Students: 30</p>
            </div>
          </div>
        </div>

      </div>

    </DashboardLayout>
  );
}