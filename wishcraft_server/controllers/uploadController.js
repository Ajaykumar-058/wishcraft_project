const fs =
require("fs");

const cloudinary =
require("../config/cloudinary");

/* UPLOAD PROFILE */

const uploadProfile =
async (req, res) => {

  try {

    // CHECK FILE

    if (!req.file) {

      return res.status(400).json({

        success: false,

        message:
          "No image uploaded"
      });
    }

    // CLOUDINARY UPLOAD

    const result =
      await cloudinary.uploader.upload(

        req.file.path,

        {
          folder:
            "wishcraft_profiles",
        }
      );

    // DELETE LOCAL FILE

    if (
      fs.existsSync(
        req.file.path
      )
    ) {

      fs.unlinkSync(
        req.file.path
      );
    }

    // RESPONSE

    res.status(200).json({

      success: true,

      imageUrl:
        result.secure_url,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      success: false,

      message:
        "Upload Failed"
    });
  }
};

module.exports = {

  uploadProfile
};