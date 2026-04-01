import React from 'react'
import { useState, useRef } from 'react';
import "./createcourse.css";
import { createCourse } from '../../../services/courseService';
import { useNavigate } from 'react-router-dom';

export default function CourseForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const fileRef = useRef();
  const navigate = useNavigate();

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
      fileRef.current.value = "";

    } catch (error) {
      console.log(error);
      alert("Error creating course");
    }
  };

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

        <label>Thumbnail</label>
        <input
          type="file"
          ref={fileRef}
          
          onChange={(e) => {
    console.log(e.target.files[0]); 
    setThumbnail(e.target.files[0]);
  }}
        />

        <button className="course-form-button" type="submit">
          Create Course
        </button>

      </form>
    </div>
  );
}