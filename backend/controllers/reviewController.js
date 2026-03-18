const Review = require("../models/Review");

// Add Review
const addReview = async (req, res) => {
  try {
    const { rating, comment, courseId } = req.body;

    // Check if student is enrolled
    const isEnrolled = await Enrollment.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (!isEnrolled) {
      return res.status(403).json({
        message: "You must enroll in the course to review it",
      });
    }

    // Prevent duplicate review
    const alreadyReviewed = await Review.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (alreadyReviewed) {
      return res.status(400).json({
        message: "You already reviewed this course",
      });
    }

    //  Create review
    const review = await Review.create({
      rating,
      comment,
      course: courseId,
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


// Get Reviews of a Course
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


//  Get Average Rating
const getAverageRating = async (req, res) => {
  try {
    const result = await Review.aggregate([
      {
        $match: { course: require("mongoose").Types.ObjectId(req.params.courseId) },
      },
      {
        $group: {
          _id: "$course",
          averageRating: { $avg: "$rating" },
        },
      },
    ]);

    res.json({
      success: true,
      averageRating: result.length > 0 ? result[0].averageRating : 0,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  addReview,
  getCourseReviews,
  getAverageRating,
};