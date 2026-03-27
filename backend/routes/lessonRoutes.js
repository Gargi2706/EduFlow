const express  = require ("express");
const router = express.Router();

const{createLesson , getLessonsByCourse , getLessonById , updateLesson , deleteLesson , markLessonComplete } = require("../controllers/lessonController")
const verifyToken = require("../middleware/verifyToken");
const upload = require("../middleware/upload");


router.post("/courses/:courseId/lessons", verifyToken,upload.fields([
    { name: "video", maxCount: 1 },
    { name: "pdf", maxCount:  2},
  ]), createLesson);
router.get("/courses/:courseId/lessons", verifyToken, getLessonsByCourse);
router.get("/courses/:courseId/lessons/:lessonId", verifyToken, getLessonById);
router.put("/courses/:courseId/lessons/:lessonId", verifyToken, updateLesson);
router.delete("/courses/:courseId/lessons/:lessonId", verifyToken, deleteLesson);
router.put("/lesson/:id/complete", verifyToken, markLessonComplete);

module.exports = router;


