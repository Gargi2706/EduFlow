const File = require("../models/File")


exports.uploadFile = async (req, res) => {
  try {
    const file = req.file;

    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

   
    let type = "file";
    if (file.mimetype.startsWith("image")) type = "image";
    if (file.mimetype.startsWith("video")) type = "video";

   
    const newFile = await File.create({
      filename: file.filename,
      path: file.path,
      mimetype: file.mimetype,
      size: file.size,
      type,

      uploadedBy: req.user?.id, 
      course: req.body.courseId,
    });

    res.status(201).json({
      message: "File uploaded successfully",
      file: newFile,
      fileUrl: `http://localhost:5000/${file.path}`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Upload error" });
  }
};