const express = require ("express");
const router = express.Router();

const { createCourse, getAllCourse, getCourseById , updateCourse , deleteCorse } = require("../controllers/courseController");
const { protect } = require("../middlewares/authMiddleware");

router.post("/", protect, createCourse);
router.get("/", getAllCourse);
router.get("/:id", getCourseById);
router.put("/:id", protect, updateCourse);
router.delete("/:id", protect, deleteCorse);

module.exports = router;    