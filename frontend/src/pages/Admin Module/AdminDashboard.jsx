import React, { useEffect, useState } from "react";
import "./adminDashboard.css";
import DashboardLayout from "../../Layout/DashboardLayout";
import axios from "axios";

export default function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCourses: 0,
    totalInstructors: 0,
  });

  const [loading, setLoading] = useState(true);


  const fetchDashboard = async () => {
  try {
    const token = localStorage.getItem("token");

    console.log("TOKEN:", token); // 

    const res = await axios.get(
      "http://localhost:3000/api/admin/dashboard",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("RESPONSE:", res.data); // 

    setStats(res.data.data);
    setLoading(false); //
  } catch (error) {
    console.log("FULL ERROR:", error.response?.data);
    setLoading(false); 
  }
};
  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <DashboardLayout>
      <div className="dashboard-container">
        
        {/* HEADER */}
        <div className="header">
          <h2>Welcome, {user?.name || "Admin"} 👋</h2>
        </div>

        {/* LOADING */}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {/* CARDS */}
            <div className="cards">
              <div className="card">
                <h3>Total Users</h3>
                <p>{stats.totalUsers}</p>
              </div>

              <div className="card">
                <h3>Total Courses</h3>
                <p>{stats.totalCourses}</p>
              </div>

              <div className="card">
                <h3>Total Instructors</h3>
                <p>{stats.totalInstructors}</p>
              </div>

               <div className="card">
                <h3>Total enrollments</h3>
                <p>{stats.totalEnrollments}</p>
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
          </>
        )}
      </div>
    </DashboardLayout>
  );
}