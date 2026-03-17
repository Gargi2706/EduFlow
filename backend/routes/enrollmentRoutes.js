const express = require("express");
const router = express.Router();

const {
    enrollCourse,
    getEnrolledCourses,
    updateProgress
} = require("../controllers/enrollmentController");

const verifyToken = require("../middleware/verifyToken");

router.post("/enroll/:courseId ", verifyToken, (req,res,next)=>{
    console.log("Enroll route hit");
    next();
}, enrollCourse);

router.get("/my-courses", verifyToken, getEnrolledCourses);

router.put("/progress/:id", verifyToken, updateProgress);


module.exports = router;





