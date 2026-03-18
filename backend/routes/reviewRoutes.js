const express = require("express");
const router = express.Router();
const {authorizeRoles} = require("../middleware/roleMiddleware");

const {
  addReview,
  getCourseReviews,
  getAverageRating,
} = require("../controllers/reviewController");

const verifyToken = require("../middleware/verifyToken");


router.post("/", verifyToken, authorizeRoles("Student"), addReview);


router.get("/:courseId", verifyToken, authorizeRoles("Instructor"), getCourseReviews);


router.get("/average/:courseId", getAverageRating);

module.exports = router;