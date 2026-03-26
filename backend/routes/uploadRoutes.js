const express = require("express");
const router = express.Router();
const { authorizeRoles } = require("../middleware/roleMiddleware");

const {
  uploadFile
} = require("../controllers/uploadController");

const verifyToken = require("../middleware/verifyToken");
const  upload  = require("../middleware/upload");


router.post("/upload", verifyToken, upload.single("file"), uploadFile);;

module.exports = router;