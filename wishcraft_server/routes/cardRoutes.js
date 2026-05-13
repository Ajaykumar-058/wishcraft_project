const router = require("express").Router();

const authMiddleware = require(
  "../middleware/authMiddleware"
);

const {
  generateCard
} = require("../controllers/cardController");

router.post(
  "/generate",
  authMiddleware,
  generateCard
);

module.exports = router;