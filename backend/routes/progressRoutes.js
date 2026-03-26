const express = require("express");
const router = express.Router();
const { updateVideoProgress } = require("../controllers/progressController");
const verifyToken = require("../middleware/verifyToken");

router.put("/video", verifyToken, updateVideoProgress);

module.exports = router;