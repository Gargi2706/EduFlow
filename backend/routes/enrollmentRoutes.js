const express = require("express");
const router = express.Router();
const { authorizeRoles} = require("../middleware/roleMiddleware");

const {
    enrollCourse,
    getEnrolledCourses,
    updateProgress,
    getEnrollmentsByCourse
} = require("../controllers/enrollmentController");

// ✅ ADD THIS LINE
const verifyToken = require("../middleware/verifyToken");

router.post("/enroll/:courseId", verifyToken, authorizeRoles("Student"), (req, res, next) => {
    console.log("Enroll route hit");
    next();
  },
  enrollCourse
);

router.get("/my-courses", verifyToken, authorizeRoles("Student"), getEnrolledCourses);

router.put("/progress/:id", verifyToken, updateProgress);

router.get(
  "/course/:courseId",
  verifyToken,
  authorizeRoles("Instructor", "Admin"),
  getEnrollmentsByCourse
);

module.exports = router;





