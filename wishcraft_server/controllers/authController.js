const pool =
require("../config/db");

const jwt =
require("jsonwebtoken");

const bcrypt =
require("bcryptjs");

const {
  OAuth2Client
} = require(
  "google-auth-library"
);

const client =
new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

/* GOOGLE LOGIN */

exports.googleLogin =
async (req, res) => {

  try {

    const { token } =
      req.body;

    const ticket =
      await client.verifyIdToken({

        idToken: token,

        audience:
          process.env.GOOGLE_CLIENT_ID,
      });

    const payload =
      ticket.getPayload();

    const {
      sub,
      email,
      name,
      picture
    } = payload;

    const existingUser =
      await pool.query(

        "SELECT * FROM users WHERE email=$1",

        [email]
      );

    let user;

    // EXISTING USER

    if (
      existingUser.rows.length > 0
    ) {

      user =
        existingUser.rows[0];

    } else {

      // CREATE USER

      const newUser =
        await pool.query(

          `
          INSERT INTO users
          (
            google_id,
            email,
            name,
            profile_photo,
            auth_provider
          )

          VALUES($1,$2,$3,$4,$5)

          RETURNING *
          `,

          [
            sub,
            email,
            name,
            picture,
            "google"
          ]
        );

      user =
        newUser.rows[0];
    }

    // JWT

    const jwtToken =
      jwt.sign(

        {
          id: user.id,
          email: user.email
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "7d"
        }
      );

    res.json({

      token: jwtToken,

      user
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      error:
        "Google Login Failed"
    });
  }
};

/* EMAIL SIGNUP */

exports.signup =
async (req, res) => {

  try {

    const {
      name,
      email,
      password
    } = req.body;

    // CHECK USER

    const existingUser =
      await pool.query(

        "SELECT * FROM users WHERE email=$1",

        [email]
      );

    if (
      existingUser.rows.length > 0
    ) {

      return res.status(400).json({

        message:
          "User already exists"
      });
    }

    // HASH PASSWORD

    const hashedPassword =
      await bcrypt.hash(
        password,
        10
      );

    // INSERT USER

    const newUser =
      await pool.query(

        `
        INSERT INTO users
        (
          name,
          email,
          password,
          auth_provider
        )

        VALUES($1,$2,$3,$4)

        RETURNING *
        `,

        [
          name,
          email,
          hashedPassword,
          "email"
        ]
      );

    const user =
      newUser.rows[0];

    // JWT

    const token =
      jwt.sign(

        {
          id: user.id,
          email: user.email
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "7d"
        }
      );

    res.json({

      token,

      user
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      message:
        "Signup Failed"
    });
  }
};

/* EMAIL LOGIN */

exports.login =
async (req, res) => {

  try {

    const {
      email,
      password
    } = req.body;

    const result =
      await pool.query(

        "SELECT * FROM users WHERE email=$1",

        [email]
      );

    if (
      result.rows.length === 0
    ) {

      return res.status(400).json({

        message:
          "Invalid Email"
      });
    }

    const user =
      result.rows[0];

    // CHECK PASSWORD

    const isMatch =
      await bcrypt.compare(

        password,

        user.password
      );

    if (!isMatch) {

      return res.status(400).json({

        message:
          "Invalid Password"
      });
    }

    // JWT

    const token =
      jwt.sign(

        {
          id: user.id,
          email: user.email
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "7d"
        }
      );

    res.json({

      token,

      user
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      message:
        "Login Failed"
    });
  }
};

/* GUEST LOGIN */

exports.guestLogin =
async (req, res) => {

  try {

    const guestToken =
      jwt.sign(

        {
          guest: true
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "1d"
        }
      );

    res.json({

      token: guestToken,

      user: {

        name: "Guest",

        auth_provider:
          "guest"
      }
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({

      error:
        err.message
    });
  }
};