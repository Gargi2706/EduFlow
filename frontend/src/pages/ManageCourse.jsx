import React from "react";
import { useEffect, useState } from "react";
import { fetchAllCourse } from "../services/courseService";
import '../styles/managecourse.css'
import CourseTable from "../components/Course/CourseTable";
import DashboardLayout from "../Layout/DashboardLayout";

export default function ManageCourse() {
  const [courses, setCourses] = useState([]);

  const loadCourses = async () => {
    try {
      const data = await fetchAllCourse();
      console.log("DATA:", data);
      setCourses(data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  //   // Fetch courses when page loads
  //   useEffect(() => {
  //     const loadCourses = async () => {
  //     try {
  //       const data = await fetchAllCourse();
  //       setCourses(data);
  //     } catch (error) {
  //       console.error("Error fetching courses:", error);
  //     }
  //   };
  //   loadCourses();
  //   }, []);

  return (
    <div>
      <DashboardLayout>

      <div className="manage-courses-container">
        <h2>Manage Courses</h2>

        <CourseTable courses={courses} refreshCourses={loadCourses} />
      </div>
      </DashboardLayout>
    </div>
  );
}
