const express  = require ("express");
const router = express.Router();

const{createLesson , getLessonsByCourse , getLessonById , updateLesson , deleteLesson } = require("../controllers/lessonController")
const verifyToken = require("../middleware/verifyToken");

router.post("/courses/:courseId/lessons", verifyToken, createLesson);
router.get("/courses/:courseId/lessons", verifyToken, getLessonsByCourse);
router.get("/courses/:courseId/lessons/:lessonId", verifyToken, getLessonById);
router.put("/courses/:courseId/lessons/:lessonId", verifyToken, updateLesson);
router.delete("/courses/:courseId/lessons/:lessonId", verifyToken, deleteLesson);

module.exports = router;


