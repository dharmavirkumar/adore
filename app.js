require('dotenv').config(); // Load environment variables from .env file
const router = require("./route/User"); // Import the user routes
const session = require('express-session'); // Import express-session for session management
const express = require('express');
const mongoose = require('./model/db'); // Import the mongoose connection
const bodyParser = require('body-parser'); // Import body-parser for parsing request bodies



const app = express();

app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUninitialized: false
}));


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from the "public" directory

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.userId  ? true : false;
  next();
});




const port = process.env.PORT || 3000;

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});



module.exports = app; // Export the app for testing or further configuration