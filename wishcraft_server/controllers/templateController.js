const pool =
require("../config/db");

/* GET ALL TEMPLATES */

const getTemplates =
async (req, res) => {

  try {

    const result =
      await pool.query(

        `
        SELECT *
        FROM templates
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
        "Failed to fetch templates"
    });
  }
};

module.exports = {

  getTemplates
};