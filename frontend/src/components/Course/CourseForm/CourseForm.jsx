import React from 'react'
import { useState } from "react";
import axios from "axios";
import "./createcourse.css";


export default function CourseForm() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("thumbnail", thumbnail);

    try {
      const res = await axios.post(
        // "http://localhost:5000/api/courses/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Course Created Successfully");
      console.log(res.data);

    } catch (error) {
      console.log(error);
      alert("Error creating course");
    }
};

  return (
    <div>
       <form className="course-form" onSubmit={handleSubmit}>

  <label>Course Title</label>
  <input
    type="text"
    placeholder="Enter course title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />

  <label>Description</label>
  <textarea
    placeholder="Enter course description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
  />

  <label>Thumbnail</label>
  <input
    type="file"
    onChange={(e) => setThumbnail(e.target.files[0])}
  />

  <button  className="course-form-button" type="submit">Create Course</button>

</form>

    
    </div>
  )
}
