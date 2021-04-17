const express = require("express");
const router = express.Router();

// For file uploads
const multer = require("multer");
const path = require("path");

// Upload Folder
const UPLOADS_DIR = "../uploads/";

// Define the storages
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
    filename: (req, file, cb) => {
      const fileExt = path.extname(file.originalname);
      const fileName =
        file.originalname
          .replace(fileExt, "")
          .toLowerCase()
          .split(" ")
          .join("-") +
        "-" +
        Date.now();

      cb(null, fileName + fileExt);
    };
  },
});

// Prepre the multer file upload object
const upload = multer({
  dest: storage,
  limits: {
    fileSize: 2000000,
  },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only .jpg .jpeg or .png files are allowed"));
    }
  },
});

module.exports = router;
