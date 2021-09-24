const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const bodyparser =  require("body-parser");

//middleware
const app = express();
require("dotenv").config();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//import the routes file
const postRoutes = require("./routes/posts.routes.js");

app.use(express.json({ limit: "1000kb", extended: true }));
app.use(express.urlencoded({ limit: "1000kb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);

//Database URL
const URL = process.env.MONGODB_URL;

//assign available port number
const PORT = process.env.PORT || 5000;

//create the connection
mongoose.connect(URL, {
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//open the connection
const conn = mongoose.connection;
mongoose.connection.once("open", () => {
  console.log("Mongodb connection success!!");
});

//display the port number
app.listen(PORT, () => {
  console.log(`Server is up ad running on port number : ${PORT}`);
});

mongoose.set("useFindAndModify", false);
