import React, { useState } from "react";
import axios from "axios";
import "./createcourse.css";

export default function CourseForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/courses",
        {
          title,
          description,
          thumbnail,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Course Created Successfully ✅");
      console.log(res.data);

      // Reset form
      setTitle("");
      setDescription("");
      setThumbnail("");

    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Error creating course ❌");
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

        <button className="course-form-button" type="submit">
          Create Course
        </button>

      </form>
    </div>
  );
}