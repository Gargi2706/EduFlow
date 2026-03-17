const express = require("express");
const router = express.Router();

const {
  addReview,
  getCourseReviews,
  getAverageRating,
} = require("../controllers/reviewController");

const verifyToken = require("../middleware/verifyToken");

// ✅ Add Review
router.post("/", verifyToken, addReview);

// ✅ Get Reviews of a Course
router.get("/:courseId", getCourseReviews);

// ✅ Get Average Rating
router.get("/average/:courseId", getAverageRating);

module.exports = router;