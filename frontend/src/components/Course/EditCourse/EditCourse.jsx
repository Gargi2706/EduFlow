import React from 'react'
import { editCourse } from '../../../services/courseService'
import { fetchById } from '../../../services/courseService'
import {useEffect , useState} from "react"
import { useParams, useNavigate } from 'react-router-dom'
import './editCourse.css'

export default function EditCourse() {

    

  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");


  useEffect(() => {

  const loadCourse = async () => {
    const data = await fetchById(id);
    setTitle(data.title);
    setStatus(data.status);
  };

  loadCourse();

}, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await editCourse(id, {
      title,
      status
    });

    navigate("/instructor/manage-courses");
  };

  return (
    <div className='nain-content'>
     
  <div className="edit-course-container">

    <div className="edit-course-card">

      <h2>Edit Course</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Course Title</label>
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Status</label>
          <select
            value={status}
            onChange={(e)=>setStatus(e.target.value)}
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>

        <button className="update-btn">
          Update Course
        </button>

      </form>

    </div>

  </div>
  </div>
  );
}