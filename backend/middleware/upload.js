const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

// 📸 Image upload (thumbnail)
const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "thumbnails",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

// 🎥 Video upload
const videoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "videos",
    resource_type: "video",
  },
});

// 📄 File upload (assignments, docs, pdf)
const fileStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "files",
    resource_type: "auto",
  },
});

const uploadImage = multer({ storage: imageStorage });
const uploadVideo = multer({ storage: videoStorage });
const uploadFile = multer({ storage: fileStorage });

module.exports = {
  uploadImage,
  uploadVideo,
  uploadFile,
};