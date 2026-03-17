const express = require("express");
const router = express.Router();

const {
  uploadImageController,
  uploadVideoController,
  uploadFileController,
} = require("../controllers/uploadController");

const verifyToken = require("../middleware/verifyToken");
const {
  uploadImage,
  uploadVideo,
  uploadFile,
} = require("../middleware/upload");

// 📸 Image
router.post("/image", verifyToken, uploadImage.single("image"), uploadImageController);

// 🎥 Video
router.post("/video", verifyToken, uploadVideo.single("video"), uploadVideoController);

// 📄 File
router.post("/file", verifyToken, uploadFile.single("file"), uploadFileController);

module.exports = router;