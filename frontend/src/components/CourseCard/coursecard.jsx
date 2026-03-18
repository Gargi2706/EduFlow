import React from "react";
import "./coursecard.css";
import { FaStar } from "react-icons/fa";

export default function coursecard({ course }) {
  const rating = 1;
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-img" />

      <div className="course-content">
        <h3>{course.title}</h3>

        <div className="rating">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={i < rating ? "text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
          <span className="instructor">{course.instructor}</span>
        </div>

        <button className="enroll-btn">Enroll</button>
      </div>
    </div>
  );
}
