import React from 'react'
import { useState } from 'react';
import "./createcourse.css";
import {createCourse} from '../../../services/courseService';

export default function CourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");


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

  } catch (error) {
    console.log(error);
    alert("Error creating course");
  }
};
  //   try {
  //     const res = await axios.post(
  //       "http://localhost:5000/api/courses",
  //       {
  //         title,
  //         description,
  //         thumbnail,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         },
  //       }
  //     );

  //     alert("Course Created Successfully ✅");
  //     console.log(res.data);

  //     // Reset form
  //     setTitle("");
  //     setDescription("");
  //     setThumbnail("");

  //   } catch (error) {
  //     console.log(error.response?.data || error.message);
  //     alert("Error creating course ❌");
  //   }
  // };

  return (
    <div>
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
          type="text"
          placeholder="Enter image URL"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          required
        />

  <button  onClick={handleSubmit} className="course-form-button" type="submit">Create Course</button>

      </form>
    </div>
  );
}