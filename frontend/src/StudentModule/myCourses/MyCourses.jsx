import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import "./myCourses.css";
import { useNavigate } from "react-router-dom";
import { getMyCourses } from "../../services/enrollService"; // ✅ ADDED

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await getMyCourses(token);

        console.log("Courses API Response:", res); // ✅ debug

        const formattedCourses = res.data.map((item) => ({
          _id: item.course._id,
          title: item.course.title,
          progress: item.progress || 0,
          image: item.course.image || "https://via.placeholder.com/300x150",
          completed: item.progress === 100,
        }));

        setCourses(formattedCourses);

      } catch (error) {
        console.log("ERROR:", error.response?.data);
      }
    };

    fetchCourses();
  }, []);

  return (
    <DashboardLayout>
      <div className="mycourses-container">

        {/* Header */}
        <div className="mycourses-header">
          <h1>My Courses</h1>
          <input
            type="text"
            placeholder="Search courses..."
            className="search-box"
          />
        </div>

        {/* Filter Buttons */}
        <div className="filters">
          <button className="active">All</button>
          <button>In Progress</button>
          <button>Completed</button>
        </div>

        {/* Course Grid */}
        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-card" key={course._id}>

              <img src={course.image} alt={course.title} />

              <div className="course-info">
                <h3>{course.title}</h3>

                <p>Progress: {course.progress}%</p>

                {!course.completed ? (
                  <button
                    onClick={() => navigate("/course-player")}
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={() => navigate("/course-player")}
                  >
                    View
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}