const Review = require("../models/Review");
const Enrollment = require("../models/Enrollment");


<<<<<<< HEAD
// Add Review
=======
>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
const addReview = async (req, res) => {
  try {
    const { rating, comment, courseId } = req.body;

<<<<<<< HEAD
    // Check if student is enrolled
=======
   
>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
    const isEnrolled = await Enrollment.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (!isEnrolled) {
      return res.status(403).json({
        message: "You must enroll in the course to review it",
      });
    }

<<<<<<< HEAD
    // Prevent duplicate review
=======
   
>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
    const alreadyReviewed = await Review.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (alreadyReviewed) {
      return res.status(400).json({
        message: "You already reviewed this course",
      });
    }

<<<<<<< HEAD
    //  Create review
=======
   
>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
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

<<<<<<< HEAD

// Get Reviews of a Course
=======
>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
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


<<<<<<< HEAD
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


=======
>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
module.exports = {
  addReview,
  getCourseReviews,
};