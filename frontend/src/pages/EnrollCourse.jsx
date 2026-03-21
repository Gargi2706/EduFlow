import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/enrollCourse.css"
import { enrollCourse } from "../services/enrollService";
import { fetchById } from "../services/courseService";

export default function EnrollCourse() {
  const { id } = useParams();
   const [course, setCourse] = useState(null);

useEffect(() => {

    const fetchCourse = async () => {
      try {
        const data = await fetchById(id);
        setCourse(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCourse();

  }, [id]);
  const handleEnroll = async () => {

  try {

     await enrollCourse(id);

    alert("Course Enrolled Successfully");

  } catch (error) {

    console.log(error);
    alert("Enrollment Failed");

  }

};
  return (
    <div className="enroll-container">
      <div className="course-content">
        <h1 className="course-title">{course.title}</h1>

        <img src={course.image} alt="" className="course-image" />

        <p className="course-description">{course.description}</p>

    
        <button className="enroll-button" onClick={handleEnroll}>Enroll</button>
      </div>
    </div>
  );
}
