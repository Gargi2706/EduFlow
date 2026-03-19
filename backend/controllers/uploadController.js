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