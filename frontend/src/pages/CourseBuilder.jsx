import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/coursebuilder.css";
import DashboardLayout from "../Layout/DashboardLayout";

export default function CourseBuilder() {
  const { courseId } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setVideo] = useState(null);
  const [content, setContent] = useState("");

  const addLesson = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("course", courseId);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("video", video);
    formData.append("content", content);

    try {
      await axios.post(
        // "http://localhost:5000/api/lessons/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      alert("Lesson added");

      setTitle("");
      setDescription("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <DashboardLayout />
      <div className="builder-container">
        <h2>Course Builder</h2>

        <form onSubmit={addLesson} className="builder-form">
          <input
            type="text"
            placeholder="Lesson Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Lesson Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <input type="file" onChange={(e) => setVideo(e.target.files[0])} />

          <textarea
            placeholder="Lesson Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

          <button type="submit">Add Lesson</button>
        </form>
      </div>
    </div>
  );
}
