const express = require("express");
const router = express.Router();

const {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  searchCourses,
  publishCourse,
  getCourseRating,
  getInstructorCourses,
  createDraftCourse,
  getDraftCourses
} = require("../controllers/courseController");
const verifyToken = require("../middleware/verifyToken");
const { authorizeRoles } = require("../middleware/roleMiddleware");
const upload = require("../middleware/upload");

router.post(
  "/",
  verifyToken,
  // authorizeRoles("Instructor"),
  upload.single("thumbnail"),
  createCourse,
);
router.get("/",  getAllCourses);
router.get("/:id", authorizeRoles("Student"), getCourseById);
router.put("/:id", authorizeRoles("Instructor"), verifyToken, updateCourse);
router.delete(
  "/:id",
  authorizeRoles("Instructor", "Admin"),
  verifyToken,
  deleteCourse,
);
router.get("/search", searchCourses);
router.put("/:id/publish", publishCourse);
router.get("/:id/rating", getCourseRating);
router.get("/my-course", verifyToken, getInstructorCourses);
router.post("/draft", verifyToken, createDraftCourse);
router.get("/draft-course" , verifyToken , getDraftCourses);

module.exports = router;
