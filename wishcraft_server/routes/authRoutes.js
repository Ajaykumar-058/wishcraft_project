const router =
require("express").Router();

const {

  googleLogin,

  guestLogin,

  signup,

  login

} = require(
  "../controllers/authController"
);

/* GOOGLE LOGIN */

router.post(
  "/google",
  googleLogin
);

/* EMAIL SIGNUP */

router.post(
  "/signup",
  signup
);

/* EMAIL LOGIN */

router.post(
  "/login",
  login
);

/* GUEST LOGIN */

router.post(
  "/guest",
  guestLogin
);

module.exports =
  router;