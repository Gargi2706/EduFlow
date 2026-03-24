const express = require("express");
const router = express.Router();
const { authorizeRoles} = require("../middleware/roleMiddleware");

const {
    studentDashboard,
    instructorDashboard,
    getEnrolledStudents
} = require("../controllers/dashboardController");

const verifyToken = require("../middleware/verifyToken");

router.get("/student", verifyToken, authorizeRoles("Student"), studentDashboard);
router.get("/instructor" , verifyToken, authorizeRoles("Instructor"), instructorDashboard);
router.get("/instructor/students/:instructorId" , verifyToken, authorizeRoles("Instructor") , getEnrolledStudents)

module.exports = router;    