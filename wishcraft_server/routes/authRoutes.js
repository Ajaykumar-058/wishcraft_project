const router = require("express").Router();

const {
  googleLogin,
  guestLogin
} = require("../controllers/authController");

router.post("/google", googleLogin);

router.post("/guest", guestLogin);

module.exports = router;