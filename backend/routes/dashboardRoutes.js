const express = require("express");
const router = express.Router();
const { authorizeRoles} = require("../middleware/roleMiddleware");

const {
    studentDashboard,
    instructorDashboard,
    getEnrolledStudents,getStudentDashboard, getStudentCourses
} = require("../controllers/dashboardController");

const verifyToken = require("../middleware/verifyToken");

router.get("/student", verifyToken, authorizeRoles("Student"), studentDashboard);
router.get("/instructor" , verifyToken,  instructorDashboard);
router.get("/instructor/students/:instructorId" , verifyToken, authorizeRoles("Instructor") , getEnrolledStudents)
router.get("/student/dashboard", verifyToken, getStudentDashboard);
router.get("/student/courses", verifyToken, getStudentCourses);

module.exports = router;