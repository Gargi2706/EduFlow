import React from 'react'

import CourseForm from '../components/Course/CourseForm/CourseForm';
import  "../components/Course/CourseForm/createcourse.css";
import DashboardLayout from '../Layout/DashboardLayout';


export default function CreateCourse() {
  return (
    <div>
      <DashboardLayout />
      <div className="create-course">
        <h2>Create New Course</h2>
        <CourseForm />

      </div>
    </div>
  )
}

    