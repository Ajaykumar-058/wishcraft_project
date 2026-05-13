const pool = require("../config/db");

const jwt = require("jsonwebtoken");

const { OAuth2Client } = require(
  "google-auth-library"
);

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

// Google Login
exports.googleLogin = async (req, res) => {

  try {

    const { token } = req.body;

    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const {
      sub,
      email,
      name,
      picture
    } = payload;

    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    let user;

    // Existing User
    if (existingUser.rows.length > 0) {

      user = existingUser.rows[0];

    } else {

      // New User
      const newUser = await pool.query(
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

      user = newUser.rows[0];
    }

    // Create JWT
    const jwtToken = jwt.sign(
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

    res.status(500).json({
      error: err.message
    });
  }
};

// Guest Login
exports.guestLogin = async (req, res) => {

  try {

    const guestToken = jwt.sign(
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
        auth_provider: "guest"
      }
    });

  } catch (err) {

    res.status(500).json({
      error: err.message
    });
  }
};