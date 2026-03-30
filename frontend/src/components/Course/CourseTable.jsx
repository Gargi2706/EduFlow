import React from "react";
import CourseRow from "./CourseRow";
import "./managecourses.css";

export default function CourseTable({ courses, refresh }) {
  return (
    <div className="table-container">
      <table className="course-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Students</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {!courses || courses.length === 0 ? (
            <tr>
              <td colSpan="4" className="no-data">
                No Courses Found
              </td>
            </tr>
          ) : (
            courses.map((course) => (
              <CourseRow
                key={course._id}
                course={course}
                refresh={refresh}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}