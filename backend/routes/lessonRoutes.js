const express  = require ("express");
const router = express.Router();

const{createLesson } = require("../controllers/lessonController")
const verifyToken = require("../middleware/verifyToken");

router.post("/", verifyToken, createLesson);

module.exports = router;


