const express = require("express");
const Course = require("../models/Course");

exports.createCourse = async (req, res) => {
  try {
    const { title, description, thumbnail } = req.body;

    const course = await Course.create({
      title,
      description,
      thumbnail,
      instructor: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: course,
      message: "Course created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getAllCourses = async (req, res) => {
  try {
    const course = await Course.find().populate("instructor", "name email");

    res.json({
      success: true,
      count: course.length,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id).populate(
      "instructor",
      "name email",
    );

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.json({
      success: true,
      data: course,
      message: "Course retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    if (!req.params.id) {
      return res.status(400).json({
        success: false,
        message: "Course ID is required",
      });
    }

    // Check if the user is the instructor of the course
    if (course.instructor.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const { title, description, thumbnail } = req.body;

    course.title = title || course.title;
    course.description = description || course.description;
    course.thumbnail = thumbnail || course.thumbnail;

    await course.save();

    res.json({
      success: true,
      data: course,
      message: "Course updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


exports.deleteCourse = async (req, res) => {
  try {

    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found"
      });
    }

    res.json({
      success: true,
      message: "Course deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};