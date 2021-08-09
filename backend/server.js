const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

//access the routes files
const posts = require("./routes/posts.routes.js");

const app = express();
require("dotenv").config();

//limit 30mb , due to we have to send images.
app.use(express.json({limited:"30mb", extended: true}));
//send encoded url requests
app.use(express.urlencoded({limited:"30mb", extended: true}));
app.use(cors());    

//url
app.use('/posts',posts);


//set the mongo url URL
const URL = process.env.MONGODB_URL;
//PORT
const PORT = process.env.PORT || 5000;

//connect to the database
mongoose.connect(URL,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

//create the connection
const conn = mongoose.Connection;
mongoose.connection.once("open", ()=>{
    console.log("MongoDB Connection success!!");
})

//listen to the PORT if connection success.
app.listen(PORT,()=>{
    console.log(`Server is up and running on port number: ${PORT}`)
})

//make sure that we are not getting any nervous.
mongoose.set('useFindAndModify', false);
