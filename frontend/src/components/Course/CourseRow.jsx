import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../services/courseService";
import './managecourses.css'


export default function CourseRow({course , refresh}) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/instructor/edit-course/${course._id}`);
  };
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Delete this course?");

    if (confirmDelete) {
      await deleteCourse(course._id);
      refresh();
    }
  };

  return (
    
      <tr>
        <td>{course.title}</td>

        <td>
        <span className={`status ${course.status}`}>
          {course.status === "published" ? "Published" : "Draft"}
        </span>
      </td>

        <td>{course.studentsEnrolled?.length || 0}</td>

        <td>
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </td>

        
      </tr>

  );
}
