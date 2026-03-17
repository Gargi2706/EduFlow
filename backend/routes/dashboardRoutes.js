const express = require("express");
const router = express.Router();
const { authorizeRoles} = require("../middleware/roleMiddleware");

const {
    studentDashboard,
    instructorDashboard
} = require("../controllers/dashboardController");

const verifyToken = require("../middleware/verifyToken");

router.get("/student", verifyToken, authorizeRoles("Student"), studentDashboard);
router.get("/instructor" , verifyToken, authorizeRoles("Instructor"), instructorDashboard);

module.exports = router;    