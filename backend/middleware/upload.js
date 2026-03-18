// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "upload/");
//   },
//   filename: function (req, file, cb) {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const fileFilter = (req, file, cb) => {
//   const allowedTypes = /jpg|jpeg|png|mp4|pdf/;
//   const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());

//   if (ext) {
//     cb(null, true);
//   } else {
//     cb("Only images, videos and pdf allowed");
//   }
// };

// const upload = multer({ storage, fileFilter });

// module.exports = upload;


const multer = require("multer");
const path = require("path");
const fs = require("fs");

<<<<<<< HEAD
// Image upload (thumbnail)
const imageStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "thumbnails",
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

// Video upload
const videoStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "videos",
    resource_type: "video",
  },
});

// File upload (assignments, docs, pdf)
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
=======
const uploadPath = "uploads/";

if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

module.exports = upload;
>>>>>>> ba7196647e4f97fcfac8826efcc16e8817ab0daa
