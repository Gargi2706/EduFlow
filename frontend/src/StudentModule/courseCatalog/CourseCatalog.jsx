import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import "./courseCatalog.css";

export default function CourseCatalog() {

  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/courses/");
      setCourses(res.data?.data || []);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DashboardLayout>
      <div className="catalog-container">

        <h2>Course Catalog</h2>

        <div className="course-list">
          {courses.map((course) => (
            <div className="course-card" key={course._id}>
              <img
                src={course.thumbnail || "/default.jpg"}
                alt={course.title}
              />

              <h3>{course.title}</h3>

              <button onClick={() => navigate(`/enroll/${course._id}`)}>
                Enroll
              </button>
            </div>
          ))}
        </div>

      </div>
    </DashboardLayout>
  );
}