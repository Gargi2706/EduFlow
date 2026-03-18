const Review = require("../models/Review");
const Enrollment = require("../models/Enrollment");


const addReview = async (req, res) => {
  try {
    const { rating, comment, courseId } = req.body;

   
    const isEnrolled = await Enrollment.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (!isEnrolled) {
      return res.status(403).json({
        message: "You must enroll in the course to review it",
      });
    }

   
    const alreadyReviewed = await Review.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (alreadyReviewed) {
      return res.status(400).json({
        message: "You already reviewed this course",
      });
    }

   
    const review = await Review.create({
      course: courseId,
      rating,
      comment,
      student: req.user.id,
    });

    res.status(201).json({
      success: true,
      data: review,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCourseReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ course: req.params.courseId })
      .populate("student", "name email");

    res.json({
      success: true,
      count: reviews.length,
      data: reviews,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  addReview,
  getCourseReviews,
};