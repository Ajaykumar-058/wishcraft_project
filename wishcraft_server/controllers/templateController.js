const pool = require("../config/db");

const getTemplates = async (
  req,
  res
) => {

  try {

    const result =
      await pool.query(
        "SELECT * FROM templates"
      );

    res.json(result.rows);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server Error"
    });
  }
};

module.exports = {
  getTemplates
};