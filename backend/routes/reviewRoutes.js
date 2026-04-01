const express = require("express");
const router = express.Router();
const { authorizeRoles } = require("../middleware/roleMiddleware");

const {
  addReview,
  getCourseReviews,
  getAllReviews,
  approveReview,
  rejectReview,
  deleteReview,
  getStats
} = require("../controllers/reviewController");

const verifyToken = require("../middleware/verifyToken");

// ✅ Student adds review
router.post("/", verifyToken, authorizeRoles("Student"), addReview);

// ✅ Order FIXED (keep as it is)
router.get("/review", verifyToken, getAllReviews);
router.get("/stats", verifyToken, getStats);

// ✅ Instructor/Admin can view course reviews
router.get(
  "/:courseId",
  verifyToken,
  authorizeRoles("Instructor", "Admin", "Student"), // allow student also if needed
  getCourseReviews
);

// ✅ Admin actions
router.put("/approve/:id", verifyToken, approveReview);
router.put("/reject/:id", verifyToken, rejectReview);
router.delete("/:id", verifyToken, deleteReview);

module.exports = router;