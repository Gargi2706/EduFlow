const express = require("express");
const Enrollment = require("../models/Enrollment");
const Course = require("../models/Course");
const User = require("../models/User");

// STUDENT DASHBOARD
exports.studentDashboard = async (req, res) => {
  try {
    const userId = req.user.id;

    const enrollments = await Enrollment.find({ student: userId })
      .populate("course");

    const totalCourses = enrollments.length;
    const completedCourses = enrollments.filter(e => e.progress === 100).length;
    const pendingCourses = totalCourses - completedCourses;

    const recentCourses = enrollments.slice(-3);

    res.status(200).json({
      success: true,
      totalCourses,
      completedCourses,
      pendingCourses,
      recentCourses,
      message: "Student dashboard data retrieved successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// INSTRUCTOR DASHBOARD
exports.instructorDashboard = async (req, res) => {
  try {
    const userId = req.user.id;     
    const courses = await Course.find({ instructor: userId });

    const totalCourses = courses.length;

    const courseIds = courses.map(c => c._id);
    const enrollments = await Enrollment.find({ course: { $in: courseIds } });

    const totalStudents = enrollments.length;
    const recentEnrollments = enrollments.slice(-3).populate("student", "name email");

    res.status(200).json({
      success: true,
      totalCourses,
      totalStudents,
      recentEnrollments,
      message: "Instructor dashboard data retrieved successfully"  
    });
}catch (error) {
    res.status(500).json({ message: error.message });
}
};    

exports.getEnrolledStudents = async (req,res ) =>{
  try{
    const courses = await Course.find({
instructorId: req.params.instructorId
});

let result = [];

for(let course of courses){

const enrollments = await Enrollment.find({
courseId: course._id
}).populate("studentId");

const students = enrollments.map(e => ({

name: e.studentId.name,
email: e.studentId.email,
date: new Date(e.enrolledAt).toDateString()

}));

result.push({
courseName: course.title,
students
});

}

res.json(result);

}catch(err){

res.status(500).json(err);

}

};
  
