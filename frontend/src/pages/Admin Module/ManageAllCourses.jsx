import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import { fetchAllCourse, deleteCourse } from "../../services/courseService";
import "../../styles/manageAllcourse.css";
import { useState , useEffect} from "react";

export default function ManageAllCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const data = await fetchAllCourse();
      setCourses(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this course?",
    );
    if (!confirm) return;

    await deleteCourse(id);
    fetchCourses();
  };
  return (
    <div>
      <DashboardLayout>
        <div className="manage-courses">
          <h2>Manage Courses</h2>

          <table className="course-table">
            <thead>
              <tr>
                <th>Thumbnail</th>
                <th>Title</th>
                <th>Instructor</th>
                <th>Students</th>
                <th>Status</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course._id}>
                  <td>
                    <img
                      src={course.thumbnail}
                      alt="course"
                      className="course-img"
                    />
                  </td>

                  <td>{course.title}</td>

                  <td>{course.instructor?.name}</td>

                  <td>{course.studentsEnrolled.length}</td>

                  <td>
                    {course.isPublished ? (
                      <span className="status active">Published</span>
                    ) : (
                      <span className="status draft">Draft</span>
                    )}
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(course._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DashboardLayout>
    </div>
  );
}
