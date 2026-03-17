const express = require("express");
const router = express.Router();

const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse
} = require("../controllers/courseController");

const verifyToken = require("../middleware/verifyToken");

// Routes
router.post("/", verifyToken, createCourse);
router.get("/", getAllCourses);
router.get("/:id", getCourseById);
router.put("/:id", verifyToken, updateCourse);
router.delete("/:id", verifyToken, deleteCourse);

module.exports = router;