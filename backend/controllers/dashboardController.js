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
   const recentEnrollments = await Enrollment.find({ course: { $in: courseIds } })
  .populate("student", "name email")
  .sort({ createdAt: -1 })
  .limit(3);

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


exports.getEnrolledStudents = async (req, res) => {
  try {
    const courses = await Course.find({
      instructor: req.user.id
    });

    let result = [];

    for (let course of courses) {

      const enrollments = await Enrollment.find({
        course: course._id
      }).populate("student", "name email");

      const students = enrollments.map(e => ({
        name: e.student.name,
        email: e.student.email,
        date: new Date(e.createdAt).toDateString()
      }));

      result.push({
        courseName: course.title,
        students
      });
    }

    res.json(result);

  } catch (err) {
    res.status(500).json(err);
  }
};



exports.getStudentDashboard = async (req, res) => {
  try {
    const studentId = req.user.id;

    const enrollments = await Enrollment.find({
      student: studentId,
    });

    const totalCourses = enrollments.length;

    const completedCourses = enrollments.filter(
      (e) => e.completed === true
    ).length;

    let totalProgress = 0;

    enrollments.forEach((e) => {
      totalProgress += e.progress;
    });

    const avgProgress =
      totalCourses > 0
        ? Math.round(totalProgress / totalCourses)
        : 0;

    res.json({
      success: true,
      data: {
        enrolledCourses: totalCourses,
        completedCourses: completedCourses,
        progress: avgProgress,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};


exports.getStudentCourses = async (req, res) => {
  try {
    const studentId = req.user.id;

    const enrollments = await Enrollment.find({
      student: studentId,
    }).populate("course");

    const courses = enrollments.map((e) => ({
      id: e.course._id,
      title: e.course.title,
      thumbnail: e.course.thumbnail,
      progress: e.progress,
    }));

    res.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};