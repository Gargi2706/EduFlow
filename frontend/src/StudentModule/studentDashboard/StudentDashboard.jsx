import DashboardLayout from "../../Layout/DashboardLayout";
import "./studentDashboard.css";
import { useNavigate } from "react-router-dom";

export default function StudentDashboard() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="student-dashboard-container">
        
        <div className="header">
          <h2>Welcome, {user?.name}</h2>
        </div>

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

        <div className="courses">
          <h3>My Courses</h3>

          <div className="course-list">
            <div className="course-card">
              <h4>React Basics</h4>
              <p>Progress: 60%</p>
              <button
                onClick={() => navigate("/course-player")}
              >
                Continue
              </button>
            </div>

            <div className="course-card">
              <h4>Node.js</h4>
              <p>Progress: 30%</p>
              <button
                onClick={() => navigate("/course-player")}
              >
                Continue
              </button>
            </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}