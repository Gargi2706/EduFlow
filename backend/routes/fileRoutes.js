const express = require("express");
const router = express.Router();
const { getFile, deleteFile } = require("../controllers/fileController");

router.get("/:id", getFile);

router.delete("/delete", deleteFile); 

module.exports = router;