import React from "react";
import { useState, useEffect } from "react";
import EnrollmentChart from "../../components/Report-section/EnrollmentChart";
import RecentActivityTable from "../../components/Report-section/RecentActivityTable";
import ReportCard from "../../components/Report-section/ReportCard";
import UserGrowthChart from "../../components/Report-section/UserGrowthChart";
import axios from "axios";
import '../../styles/admiinReports.css'
import DashboardLayout from "../../Layout/DashboardLayout";

export default function AdminReports() {
  const [stats, setStats] = useState({
  totalUsers: 0,
  totalCourses: 0,
  totalEnrollments: 0,
  blockedUsers: 0,
});
  const [userGrowth, setUserGrowth] = useState([]);
  const [enrollment, setEnrollment] = useState([]);
  const [activity, setActivity] = useState([]);

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = async () => {
    try {
      const res = await axios.get("/api/admin/reports", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      
      setStats(res.data.stats || {});
      setUserGrowth(res.data.userGrowth);
      setEnrollment(res.data.enrollments);
      setActivity(res.data.recentActivity);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
        <DashboardLayout>
      <div className="reports-container">
        <h2 className="reports-title">Admin Reports</h2>

        <div className="cards-container">
          <ReportCard title="Total Users" value={stats.totalUsers} icon="👤" />
          <ReportCard title="Courses" value={stats.totalCourses} icon="📚" />
          <ReportCard
            title="Enrollments"
            value={stats.totalEnrollments}
            icon="📈"
          />
          <ReportCard title="Blocked" value={stats.blockedUsers} icon="🚫" />
        </div>

        <div className="charts-container">
          <UserGrowthChart data={userGrowth} />
          <EnrollmentChart data={enrollment} />
        </div>

        <div className="table-container">
          <RecentActivityTable data={activity} />
        </div>
      </div>
      </DashboardLayout>
    </div>
  );
}
