require("dotenv").config();

const express =
require("express");

const cors =
require("cors");

/* ROUTES */

const authRoutes =
require("./routes/authRoutes");

const templateRoutes =
require("./routes/templateRoutes");

const uploadRoutes =
require("./routes/uploadRoutes");

/* APP */

const app = express();

/* MIDDLEWARE */

app.use(

  cors({

    origin: [

      "https://wishcraft-project-gy5g.vercel.app",

      "http://localhost:5173"
    ],

    credentials: true,
  })
);

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

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

/* ERROR HANDLER */

app.use((err, req, res, next) => {

  console.log(err);

  res.status(500).json({

    message:
      "Internal Server Error"
  });
});

/* SERVER */

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(

    `Server running on port ${PORT}`
  );
});