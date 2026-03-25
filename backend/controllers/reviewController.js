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


 const getAllReviews = async (req, res) => {
  try {

    const reviews = await Review.find()
      .populate("student", "name email")
      .populate("course", "title");

    res.json(reviews);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const approveReview = async (req, res) => {

  try {

    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { status: "Approved" },
      { new: true }
    );

    res.json(review);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

 const rejectReview = async (req, res) => {

  try {

    const review = await Review.findByIdAndUpdate(
      req.params.id,
      { status: "Rejected" },
      { new: true }
    );

    res.json(review);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

const deleteReview = async (req, res) => {

  try {

    await Review.findByIdAndDelete(req.params.id);

    res.json({ message: "Review deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};



const getStats = async (req, res) => {
  try {
    const reviews = await Review.find();

    const totalReviews = reviews.length;

    const avgRating =
      reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews;

    const ratingCount = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0,
    };

    reviews.forEach((r) => {
      ratingCount[r.rating]++;
    });

    res.json({
      totalReviews,
      avgRating: avgRating.toFixed(1),
      ratingCount,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  addReview,
  getCourseReviews,
  getAllReviews,
  approveReview,
  rejectReview,
  deleteReview,
  getStats
};