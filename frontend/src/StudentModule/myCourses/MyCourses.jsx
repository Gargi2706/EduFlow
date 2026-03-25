import React, { useEffect, useState } from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import "./myCourses.css";
import { useNavigate } from "react-router-dom";

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // 🔥 TEMP STATIC DATA (replace with API later)
    setCourses([
      {
        _id: "1",
        title: "React Basics",
        progress: 60,
        image: "https://via.placeholder.com/300x150",
        completed: false,
      },
      {
        _id: "2",
        title: "Node.js",
        progress: 30,
        image: "https://via.placeholder.com/300x150",
        completed: false,
      },
      {
        _id: "3",
        title: "Python for Beginners",
        progress: 100,
        image: "https://via.placeholder.com/300x150",
        completed: true,
      },
    ]);
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