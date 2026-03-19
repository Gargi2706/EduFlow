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


router.post("/image", verifyToken, upload.single("image"), uploadImageController);


router.post("/video", verifyToken, upload.single("video"), uploadVideoController);


router.post("/file", verifyToken, upload.single("file"), uploadFileController);

module.exports = router;