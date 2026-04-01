const express = require("express");
const router = express.Router();
const { authorizeRoles } = require("../middleware/roleMiddleware");

const {
  enrollCourse,
  getEnrolledCourses,
  updateProgress,
  getEnrollmentsByCourse
} = require("../controllers/enrollmentController");

const verifyToken = require("../middleware/verifyToken");

// ✅ ENROLL
router.post(
  "/enroll/:courseId",
  verifyToken,
  enrollCourse
);

// ✅ MY COURSES
router.get(
  "/my-courses",
  verifyToken,
  authorizeRoles("Student"),
  getEnrolledCourses
);

// ✅ UPDATE PROGRESS
router.put(
  "/progress/:id",
  verifyToken,
  updateProgress
);

// ✅ FIXED (now function exists)
router.get(
  "/course/:courseId",
  verifyToken,
  authorizeRoles("Instructor", "Admin"),
  getEnrollmentsByCourse
);

module.exports = router;