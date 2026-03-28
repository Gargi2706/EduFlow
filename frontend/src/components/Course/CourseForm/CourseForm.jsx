import React from 'react'
import { useState ,useRef } from 'react';
import "./createcourse.css";
import {createCourse} from '../../../services/courseService';
import { useNavigate } from 'react-router-dom';

export default function CourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

const fileRef = useRef(); 
  const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("thumbnail", thumbnail);

  try {
    const data = await createCourse(formData);

    alert("Course Created Successfully");
    console.log(data);

 navigate(`/instructor/add-lessons/${data.data._id}`);
 
    setTitle("");
      setDescription("");
      setThumbnail(null);
      fileRef.current.value = ""; // reset file input

  } catch (error) {
    console.log(error);
    alert("Error creating course");
  }
};

const navigate = useNavigate();

  return (
    <div className='course-container'>
      <form className="course-form" onSubmit={handleSubmit}>

        <label>Course Title</label>
        <input
          type="text"
          placeholder="Enter course title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label>Description</label>
        <textarea
          placeholder="Enter course description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label>Thumbnail URL</label>
        <input
          type="file"
          placeholder="Enter image URL"
           ref={fileRef}
          onChange={(e) => setThumbnail(e.target.files[0])}
          required
        />

  <button  onClick={handleSubmit} className="course-form-button" type="submit">Create Course</button>

      </form>
    </div>
  );
}