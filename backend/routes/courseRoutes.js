const express = require ("express");
const router = express.Router();

const { createCourse, getAllCourses, getCourseById , updateCourse , deleteCourse } = require("../controllers/courseController");
const verifyToken = require("../middleware/verifyToken");
const { authorizeRoles} = require("../middleware/roleMiddleware");
const upload = require("../middleware/upload")

router.post("/", verifyToken, authorizeRoles("Instructor"),upload.single("thumbnail"), createCourse);
router.get("/", authorizeRoles("Student"), getAllCourses);
router.get("/:id", authorizeRoles("Student"), getCourseById);
router.put("/:id", authorizeRoles("Instructor"), verifyToken, updateCourse);
router.delete("/:id", authorizeRoles("Instructor" , "Admin"), verifyToken, deleteCourse);

module.exports = router;    