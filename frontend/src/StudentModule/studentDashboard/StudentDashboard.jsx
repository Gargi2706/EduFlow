import { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import "./studentDashboard.css";
import { useNavigate } from "react-router-dom";
import CourseCard from "../../components/Course/CourseCard/coursecard";

import {
  getDashboardStats,
  getMyCourses,
} from "../../services/dashboardService";

export default function StudentDashboard() {
  const user =
    JSON.parse(localStorage.getItem("user") || "{}");

  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    enrolledCourses: 0,
    completedCourses: 0,
    progress: 0,
  });

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const statsRes = await getDashboardStats(token);
      setStats(statsRes.data);

      const courseRes = await getMyCourses(token);
      setCourses(courseRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="student-dashboard-container">

        <div className="header">
          <h2>Welcome, {user?.name} 👋</h2>
        </div>

        <div className="cards">

          <div className="card">
            <h3>Enrolled Courses</h3>
            <p>{stats.enrolledCourses}</p>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <p>{stats.completedCourses}</p>
          </div>

          <div className="card">
            <h3>Progress</h3>
            <p>{stats.progress}%</p>
          </div>

        </div>

        <div className="courses">
          <h3>My Courses</h3>

          <div className="course-list">

            {courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                progress={course.progress}
                thumbnailImg={course.thumbnail}
                onContinue={() =>
                  navigate(`/course-player/${course.id}`)
                }
              />
            ))}

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}