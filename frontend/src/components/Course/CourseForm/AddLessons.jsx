import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./addLessons.css";
import { addLesson } from "../../../services/lessonService";
import axios from "axios";
import DashboardLayout from "../../../Layout/DashboardLayout";

export default function AddLessons() {
  const { courseId } = useParams();

  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [lessons, setLessons] = useState([]);

  const handleUpload = async () => {
    const formData = new FormData();

    formData.append("title", title);
    formData.append("video", video);
    formData.append("pdf", pdf);

    try {
      const data = await addLesson(courseId, formData);

      alert("Lesson Uploaded ✅");

      console.log(data);
      setLessons([...lessons, data.data]);

      setTitle("");
      setVideo(null);
      setPdf(null);
    } catch (error) {
      console.log(error);
      alert("Upload Failed ❌");
    }
  };

  const publishCourse = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/courses/${courseId}/publish`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      alert("Course Published 🚀");
    } catch (error) {
      console.log(error);
      alert("Publish Failed ❌");
    }
  };

  const saveDraft = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/courses/draft`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      alert("Saved as Draft 📝");
    } catch (error) {
      console.log(error);
      alert("Draft Failed ❌");
    }
  };
  return (
    <DashboardLayout >
    <div className="lesson-container">
      <div className="lesson-card">
        <h2>Add Lessons</h2>

        <input
          type="text"
          placeholder="Enter Lesson Title"
          className="lesson-input"
          onChange={(e) => setTitle(e.target.value)}
        />

        <div className="file-group">
          <label>Upload Video</label>
          <input
            type="file"
            className="file-input"
            onChange={(e) => setVideo(e.target.files[0])}
          />
        </div>

        <div className="file-group">
          <label>Upload PDF</label>
          <input
            type="file"
            className="file-input"
            onChange={(e) => setPdf(e.target.files[0])}
          />
        </div>

        <button className="upload-btn" onClick={handleUpload}>
          Upload Lesson
        </button>

        <div className="lesson-list">
          {lessons.map((lesson, index) => (
            <div key={index} className="lesson-item">
              <p>{lesson.title}</p>
            </div>
          ))}
        </div>

        <div className="action-buttons">
          <button className="draft-btn" onClick={saveDraft}>
            Save Draft
          </button>

          <button className="publish-btn" onClick={publishCourse}>
            Publish Course
          </button>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}
