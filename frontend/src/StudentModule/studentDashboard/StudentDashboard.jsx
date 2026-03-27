import DashboardLayout from "../../Layout/DashboardLayout";
import "./studentDashboard.css";
import { useNavigate } from "react-router-dom";

import CourseCard from "../../components/Course/CourseCard/coursecard";

export default function StudentDashboard() {

  const user =
    JSON.parse(localStorage.getItem("user") || "{}");

  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="student-dashboard-container">
        
        <div className="header">
          <h2>Welcome, {user?.name}</h2>
        </div>


        {/* cards (same as before) */}
        <div className="cards">

          <div className="card">
            <h3>Enrolled Courses</h3>
            <p>5</p>
          </div>

          <div className="card">
            <h3>Completed</h3>
            <p>2</p>
          </div>

          <div className="card">
            <h3>Progress</h3>
            <p>40%</p>
          </div>

        </div>


        {/* courses section */}
        <div className="courses">

          <h3>My Courses</h3>

          <div className="course-list">

            <CourseCard
              title="React Basics"
              progress={60}
              thumbnail="/src/assets/thumbnail.png"
              onContinue={() =>
                navigate("/course-player")
              }
            />

            <CourseCard
              title="Node.js"
              progress={30}
              thumbnail="/src/assets/thumbnail.png"
              onContinue={() =>
                navigate("/course-player")
              }
            />

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}