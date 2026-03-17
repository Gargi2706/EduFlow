// 📸 Upload Image
const uploadImageController = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      url: req.file.path,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 🎥 Upload Video
const uploadVideoController = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      url: req.file.path,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📄 Upload File
const uploadFileController = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      url: req.file.path,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadImageController,
  uploadVideoController,
  uploadFileController,
};