const express =
require("express");

const router =
express.Router();

const pool =
require("../config/db");

/* GET ALL USERS */

router.get(
  "/",
  async (req, res) => {

    try {

      const result =
        await pool.query(

          `
          SELECT
            id,
            name,
            email,
            profile_photo,
            auth_provider
          FROM users
          ORDER BY id DESC
          `
        );

      res.status(200).json(
        result.rows
      );

    } catch (err) {

      console.log(err);

      res.status(500).json({

        message:
          "Failed to fetch users"
      });
    }
  }
);

module.exports =
router;