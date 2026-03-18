import React from 'react'
import "./coursecard.css";

export default function coursecard({ course }) {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-img" />

      <div className="course-content">
        <h3>{course.title}</h3>

        <div className="rating">
          ⭐⭐⭐⭐☆
          <span className="instructor">{course.instructor}</span>
        </div>

        <button className="enroll-btn">Enroll</button>
      </div>
    </div>
  )
}
