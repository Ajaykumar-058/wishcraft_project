const express =
require("express");

const multer =
require("multer");

const path =
require("path");

const {
  uploadProfile
} = require(
  "../controllers/uploadController"
);

const router =
express.Router();

/* MULTER STORAGE */

const storage =
multer.diskStorage({

  destination: (

    req,
    file,
    cb

  ) => {

    cb(
      null,
      "uploads/"
    );
  },

  filename: (

    req,
    file,
    cb

  ) => {

    cb(

      null,

      Date.now() +
      path.extname(
        file.originalname
      )
    );
  }
});

/* FILE FILTER */

const fileFilter = (

  req,
  file,
  cb

) => {

  if (

    file.mimetype.startsWith(
      "image/"
    )

  ) {

    cb(null, true);

  } else {

    cb(

      new Error(
        "Only images allowed"
      ),

      false
    );
  }
};

/* MULTER */

const upload =
multer({

  storage,

  fileFilter
});

/* ROUTE */

router.post(

  "/profile",

  upload.single("image"),

  uploadProfile
);

module.exports = router;