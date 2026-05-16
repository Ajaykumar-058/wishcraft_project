const jwt =
require("jsonwebtoken");

module.exports =
(req, res, next) => {

  try {

    // GET HEADER

    const authHeader =
      req.headers.authorization;

    if (!authHeader) {

      return res.status(401).json({

        message:
          "No token provided"
      });
    }

    // REMOVE BEARER

    const token =
      authHeader.split(" ")[1];

    if (!token) {

      return res.status(401).json({

        message:
          "Invalid token format"
      });
    }

    // VERIFY

    const verified =
      jwt.verify(

        token,

        process.env.JWT_SECRET
      );

    req.user = verified;

    next();

  } catch (err) {

    console.log(err);

    res.status(401).json({

      message:
        "Invalid token"
    });
  }
};