const Course = require("../models/Course");

// Create Course
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


// Get All Courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate("instructor", "name email");

    res.json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// Get Course By ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("instructor", "name email");

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


// Update Course
exports.updateCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    // Check if logged-in user is instructor
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


// Delete Course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    // Only instructor can delete
    if (course.instructor.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Unauthorized",
      });
    }

    await course.deleteOne();

    res.json({
      success: true,
      message: "Course deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};