require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

const fs =
require("fs");

/* ROUTES */

const authRoutes =
require("./routes/authRoutes");

const templateRoutes =
require("./routes/templateRoutes");

const uploadRoutes =
require("./routes/uploadRoutes");

/* APP */

const app = express();

/* CREATE UPLOADS FOLDER */

if (
  !fs.existsSync("uploads")
) {

  fs.mkdirSync("uploads");
}

/* MIDDLEWARE */

app.use(

  cors({

    origin: [

      "http://localhost:5173",

      "https://wishcraft-project-gy5g.vercel.app"
    ],

    credentials: true,
  })
);

app.use(express.json());

/* API ROUTES */

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/templates",
  templateRoutes
);

app.use(
  "/api/upload",
  uploadRoutes
);

/* TEST ROUTE */

app.get("/", (req, res) => {

  res.send(
    "WishCraft API Running"
  );
});

/* SERVER */

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`
  );
});