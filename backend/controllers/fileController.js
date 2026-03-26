const File = require("../models/File");
const path = require("path");
const fs = require("fs");

exports.getFile = async (req, res) => {
  try {
    const { id } = req.params;
    const file = await File.findById(id);
    if (!file) return res.status(404).json({ message: "File not found" });

    if (file.path) {
      return res.sendFile(path.resolve(file.path));
    }


  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};


exports.deleteFile = async (req, res) => {
  try {
    const { id } = req.body; // you can also use req.params
    const file = await File.findById(id);
    if (!file) return res.status(404).json({ message: "File not found" });

    if (file.path) {
      fs.unlink(file.path, (err) => {
        if (err) console.error("File delete error:", err);
      });
    }

    await File.findByIdAndDelete(id);

    res.json({ message: "File deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};