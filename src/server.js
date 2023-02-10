require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { mongodb_connection } = require("./config/db");
const errorHandler = require("./api/middleware/errorHandler");
const morgan = require("morgan");

// CONNECTION PORT
const _PORT = process.env.PORT || 5000;

//morgan middleware
app.use(morgan("dev"));

// CONNECTION TO MONGOOSE
mongodb_connection();

// app.disable("etag");

// CORS Middleware
app.use(cors({ origin: true, optionsSuccessStatus: 200, credentials: true }));

// json Middleware
app.use(express.json({ limit: "100mb" }));

// built-in Middleware to handle urlencoded form
app.use(express.urlencoded({ extended: true, limit: "100mb" }));

// Cookie Parser Middlewares 
app.use(cookieParser());

/* 
@application routes
=================================================
*/

// @ROUTES ACCESS: PUBLIC 
app.use("/client", require("./api/routes/aboutClientProject"));


// =================================================

// send 404 if route not found
app.all("*", (req, res) =>
  res.status(404).json({ msg: "resources not found" })
);

// ERROR HANDLER
app.use(errorHandler);

// CHECK IF MONGODB CONNECTS BEFORE PROCEEDING
mongoose.connection.once("open", () => {
  app.listen(_PORT, () => {
    console.log(`Software Name :: Unik Creative Server`);
    console.log(`Environment :: ${process.env.NODE_ENV}`);
    console.log(`Developers :: UNIK CREATIVE ***`);
    console.log(`Running On Port :: ${_PORT}`);
    console.log(`Started @ :: ${new Date()}`);
    console.log(`MongoDB :: Connected Successfully`);
  });
});
