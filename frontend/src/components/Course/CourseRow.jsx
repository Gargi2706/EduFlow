import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteCourse } from "../../../../backend/controllers/courseController";
import { editCourse } from "../../services/courseSevice";

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
    <div>
      <tr>
        <td>{course.title}</td>

        <td>{course.status}</td>

        <td>{course.students.length}</td>

        <td>
          <button className="edit-btn" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-btn" onClick={handleDelete}>
            Delete
          </button>
        </td>

        <td>
          <span className={`status ${course.status}`}>{course.status}</span>
        </td>
      </tr>
    </div>
  );
}
