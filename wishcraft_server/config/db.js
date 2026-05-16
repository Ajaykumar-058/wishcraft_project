const { Pool } =
require("pg");

require("dotenv").config();

const pool = new Pool({

  connectionString:
    process.env.DATABASE_URL,

  ssl: {
    rejectUnauthorized: false,
  },
});

// TEST CONNECTION

pool.connect()

  .then(() => {

    console.log(
      "Neon PostgreSQL Connected"
    );
  })

  .catch((err) => {

    console.log(
      "Database Connection Error:",
      err
    );
  });

module.exports = pool;