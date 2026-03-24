import React, { useEffect, useState } from "react";
import CourseStudentsCard from "../../components/CourseStudentsCard"
import { getInstructorStudents } from "../../services/studentService"
import "../../styles/studentsEnrolled.css"
import DashboardLayout from "../../Layout/DashboardLayout"

export default function StudentsEnrolled() {
  const [courses, setCourses] = useState([]);

  const instructorId = "6612345678abcd1234567890"; // sample id

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const data = await getInstructorStudents(instructorId);

      setCourses(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <DashboardLayout>
      <div className="studentsPage">
        <h2>Students Enrolled</h2>
        <p className="subText">See students who joined your courses</p>

        <div className="searchFilter">
          <input placeholder="Search Student" />

          <select>
            <option>Filter by Course</option>
          </select>
        </div>

        <div className="coursesContainer">
          {courses.map((course, index) => (
            <CourseStudentsCard key={index} course={course} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
