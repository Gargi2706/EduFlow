const express = require("express");
const Course = require("../models/Course");
const Rating = require("../models/Rating")

exports.createCourse = async (req, res) => {

    console.log("FILE:", req.file);
    console.log("BODY:", req.body);
  try {
    const { title, description } = req.body;
const thumbnail = req.file ? req.file.path : "";
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
    console.log(error); 
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
    // if (course.instructor.toString() !== req.user.id) {
    //   return res.status(403).json({
    //     success: false,
    //     message: "Unauthorized",
    //   });
    // }

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

    const course = await Course.findById(courseId);

    if (!course) {
      return res.status(404).json({
        message: "Course not found",
      });
    }

    course.status = "published";

    await course.save();

    res.json({
      message: "Course published successfully",
      course,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error publishing course",
      error: error.message,
    });
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



 exports.getInstructorCourses = async (req, res) => {
  try {

    console.log("USER:", req.user); // debug

    const courses = await Course.find({
      instructor: req.user._id
    });

    res.status(200).json({
      success: true,
      data: courses
    });

  } catch (error) {
    console.log("ERROR:", error);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// exports.getInstructorCourses = async (req, res) => {
//   try {
//     const instructorId = req.user.id;

//     const courses = await Course.find({
//       instructor: instructorId
//     })
//     .populate("instructor", "name email")
//     .sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: courses.length,
//       courses
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Server Error",
//       error: error.message
//     });
//   }
// };


exports.createDraftCourse = async (req, res) => {
  try {

    const { title, description,  thumbnail } = req.body;

    const instructorId = req.user.id;

    const course = new Course({
      title,
      description,
      thumbnail,
      instructor: instructorId,
      status: "draft",   
    });

    await course.save();

    res.status(201).json({
      message: "Course saved as draft",
      course,
    });

  } catch (error) {
    res.status(500).json({
      message: "Error creating draft",
      error: error.message,
    });
  }
};


exports.getDraftCourses = async (req, res) => {
  try {

    const instructorId = req.user.id;

    const drafts = await Course.find({
      instructor: instructorId,
      status: "draft",
    });

    res.status(200).json({
      success: true,
      count: drafts.length,
      drafts
    });
;

  } catch (error) {
    res.status(500).json({
      message: "Error fetching drafts",
      error: error.message,
    });
  }
};