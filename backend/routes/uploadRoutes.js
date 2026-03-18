const express = require("express");
const router = express.Router();
const { authorizeRoles } = require("../middleware/roleMiddleware");

const {
  uploadImageController,
  uploadVideoController,
  uploadFileController,
} = require("../controllers/uploadController");

const verifyToken = require("../middleware/verifyToken");
const  upload  = require("../middleware/upload");

<<<<<<< HEAD
// Image
router.post("/image", verifyToken, uploadImage.single("image"), uploadImageController);

//  Video
router.post("/video", verifyToken, uploadVideo.single("video"), uploadVideoController);

// File
router.post("/file", verifyToken, uploadFile.single("file"), uploadFileController);
=======

router.post("/image", verifyToken, upload.single("image"), uploadImageController);


router.post("/video", verifyToken, upload.single("video"), uploadVideoController);


router.post("/file", verifyToken, upload.single("file"), uploadFileController);
>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa

module.exports = router;