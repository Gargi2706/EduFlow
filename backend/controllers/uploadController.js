<<<<<<< HEAD
//Upload Image
=======

>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
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

<<<<<<< HEAD
//Upload Video
=======
>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
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

<<<<<<< HEAD
//Upload File
=======

>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
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