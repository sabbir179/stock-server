const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const db = require("./db/db");
const userInfo = require("./routeHandler/userInfo");
const { auth } = require('express-openid-connect');

// auth0 configuretion

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER
};

//express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose [ THIS DB IS CONNECTED IN db/db.js FILE]
// mongoose
//   .connect("mongodb://127.0.0.1:27017/StockReaper")
//   .then(() => console.log("connection sucessful"))
//   .catch((err) => console.log(err));

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));


// application router
app.use("/userInfo", userInfo);

// defaul error handler
function errorHandler(err, req, res, next) {
  if (res.handlerSent) {
    return next(err);
    console.log("hello");
  }
  res.status(500).json({ error: err });
  console.log("this 500 sdfe");
}

app.listen(5000, () => {
  console.log("app listening at port 5000");
});
