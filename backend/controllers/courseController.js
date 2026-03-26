const express = require("express");
const Course = require("../models/Course");
const Rating = require("../models/Rating")

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

exports.searchCourses = async (req, res) => {
    try {
        const { query, level } = req.query;
        let filter = {};

        if(query) filter.title = { $regex: query, $options: "i" };
        if(level) filter.level = level;

        const courses = await Course.find(filter);
        res.json({ success: true, courses });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


exports.publishCourse = async (req, res) => {
    try {
        const courseId = req.params.id;
        const { publish } = req.body;

        const course = await Course.findById(courseId);
        if(!course) return res.status(404).json({ success: false, message: "Course not found" });

        course.isPublished = publish;
        await course.save();

        res.json({ success: true, message: `Course has been ${publish ? "published" : "unpublished"}`, course });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};


exports.getCourseRating = async (req, res) => {
    try {
        const courseId = req.params.id;
        const ratings = await Rating.find({ course: courseId });

        const totalReviews = ratings.length;
        const averageRating = totalReviews ? (ratings.reduce((acc, r) => acc + r.rating, 0) / totalReviews).toFixed(2) : 0;

        const ratingsBreakdown = { "5":0, "4":0, "3":0, "2":0, "1":0 };
        ratings.forEach(r => ratingsBreakdown[r.rating]++);

        res.json({ success: true, courseId, averageRating, totalReviews, ratingsBreakdown });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
